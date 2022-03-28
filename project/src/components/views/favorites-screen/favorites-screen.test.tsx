import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-router/history-router';
import FavoritesScreen from './favorites-screen';

import {AuthorizationStatus} from '../../../const/auth-status';
import {makeFakeHotel} from '../../../utils/mocks';

const mockStore = configureMockStore();

describe('Component: favorites', () => {
  it('should render "favorites"', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
      DATA: {
        favorites: [makeFakeHotel()],
        isDataLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "favorites empty"', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
      DATA: {
        favorites: [],
        isDataLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Favorites \(empty\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

});
