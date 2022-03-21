import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

import App from './app';
import HistoryRouter from '../common/history-route/history-route';

import {AuthorizationStatus} from '../../const/auth-status';
import {AppRoute} from '../../const/routes';
import {SortingType} from '../../const/sorting';
import {Cities, CitiesCoords} from '../../const/cities';
import { makeFakeHotel } from '../../utils/mocks';
const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {
    isDataLoaded: true,
    hotels: [],
    favorites: [],
    hotel: makeFakeHotel(),
    reviews: [],
    nearbyHotels: [],
  },
  MAIN_SCREEN: {sortType: SortingType.Popular, city: CitiesCoords[Cities.Paris]},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);

    render(fakeApp);

    expect(screen.getByTestId(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Password/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "Property" when user navigate to "/offer/:id"', () => {
    history.push(AppRoute.Property);

    render(fakeApp);

    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
