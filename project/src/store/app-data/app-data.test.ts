import {appData, loadFavorites, loadHotelById, loadNearbyHotels, loadReviews, updateHotel, loadHotels} from './app-data';
import {makeFakeHotel, makeFakeReview} from '../../utils/mocks';

const initialState = {
  hotels: [],
  isDataLoaded: false,
  hotel: null,
  reviews: [],
  nearbyHotels: [],
  favorites: [],
};

const hotel = makeFakeHotel();
const hotels = [hotel];
const reviews = [makeFakeReview()];

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should update hotels by load hotels', () => {
    expect(appData.reducer(initialState, loadHotels(hotels)))
      .toEqual({
        ...initialState,
        hotels,
        isDataLoaded: true,
      });
  });

  it('should update hotel by load hotel', () => {
    expect(appData.reducer(initialState, loadHotelById(hotel)))
      .toEqual({
        ...initialState,
        hotel,
        isDataLoaded: true,
      });
  });

  it('should update reviews by load reviews', () => {
    expect(appData.reducer(initialState, loadReviews(reviews)))
      .toEqual({
        ...initialState,
        reviews,
        isDataLoaded: true,
      });
  });

  it('should update nearby hotels by load nearby hotels', () => {
    expect(appData.reducer(initialState, loadNearbyHotels(hotels)))
      .toEqual({
        ...initialState,
        nearbyHotels: hotels,
        isDataLoaded: true,
      });
  });

  it('should update favorites by load favorites', () => {
    expect(appData.reducer(initialState, loadFavorites(hotels)))
      .toEqual({
        ...initialState,
        favorites: hotels,
        isDataLoaded: true,
      });
  });

  it('should update hotel by click favorite btn', () => {
    expect(appData.reducer({...initialState, hotels}, updateHotel(hotel)))
      .toEqual({
        ...initialState,
        hotels: [hotel],
      });
  });

  it('should remove hotel from favorites by click favorite btn', () => {
    expect(appData.reducer({...initialState, favorites: hotels}, updateHotel(hotel)))
      .toEqual({
        ...initialState,
        favorites: [],
      });
  });
});


