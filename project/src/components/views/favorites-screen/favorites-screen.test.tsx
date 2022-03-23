import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-route/history-route';
import FavoritesScreen from './favorites-screen';
import {AuthorizationStatus} from '../../../const/auth-status';
import {makeFakeHotel} from '../../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {
    favorites: [makeFakeHotel()],
    isDataLoaded: true,
  },
});

describe('Component: favorites', () => {
  it('should render "favorites"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
