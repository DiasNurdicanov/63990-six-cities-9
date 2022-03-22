import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';

import {addReviewAction, checkAuthAction, fetchFavorites, fetchHotelByIdAction, fetchHotelsAction, fetchNearbyHotelsAction, fetchReviewsAction, toggleFavoriteStatus} from './api-actions';
import {requireAuthorization} from './user-process/user-process';
import {loadFavorites, loadHotelById, loadHotels, loadNearbyHotels, loadReviews, updateHotel} from './app-data/app-data';
import {APIRoute} from '../const/api-routes';
import {State} from '../types/state';
import {AddReview} from '../types/add-review';

import {makeFakeHotel, makeFakeReview} from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch Load_Hotels when GET /hotels', async () => {
    const mockHotels = [makeFakeHotel()];
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, mockHotels);

    const store = mockStore();

    await store.dispatch(fetchHotelsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadHotels.toString());
  });

  it('should dispatch Load_Hotel_By_Id when GET /hotels/:id', async () => {
    const mockHotel = makeFakeHotel();
    mockAPI
      .onGet(`${APIRoute.Hotel}1`)
      .reply(200, mockHotel);

    const store = mockStore();

    await store.dispatch(fetchHotelByIdAction('1'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadHotelById.toString());
  });

  it('should dispatch Load_Reviews when GET /reviews', async () => {
    const mockReviews = [makeFakeReview()];
    mockAPI
      .onGet(`${APIRoute.Reviews}1`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction('1'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadReviews.toString());
  });

  it('should dispatch Load_Nearby_Hotels when GET /hotel/:id/nearby', async () => {
    const mockHotels = [makeFakeHotel()];
    mockAPI
      .onGet(`${APIRoute.Hotel}1/nearby`)
      .reply(200, mockHotels);

    const store = mockStore();

    await store.dispatch(fetchNearbyHotelsAction('1'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadNearbyHotels.toString());
  });

  it('should dispatch Load_Reviews when POST /reviews/:id', async () => {
    const fakeReview: AddReview = {hotelId: 1, reviewData: {comment: 'Text', rating: 5}};
    const mockReviews = [makeFakeReview()];

    mockAPI
      .onPost(`${APIRoute.Reviews}1`)
      .reply(200, mockReviews);


    const store = mockStore();
    await store.dispatch(addReviewAction(fakeReview));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadReviews.toString());
  });

  it('should dispatch Update_Hotel when POST /favorite/:id/:status', async () => {
    const fakeData = {hotelId: 1, status: 0};
    const mockHotel = makeFakeHotel();

    mockAPI
      .onPost(`${APIRoute.Favorites}1/0`)
      .reply(200, mockHotel);


    const store = mockStore();
    await store.dispatch(toggleFavoriteStatus(fakeData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(updateHotel.toString());
  });

  it('should dispatch Load_Favorites when GET /favorites', async () => {
    const mockHotels = [makeFakeHotel()];
    mockAPI
      .onGet(APIRoute.Favorites)
      .reply(200, mockHotels);

    const store = mockStore();

    await store.dispatch(fetchFavorites());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadFavorites.toString());
  });

});
