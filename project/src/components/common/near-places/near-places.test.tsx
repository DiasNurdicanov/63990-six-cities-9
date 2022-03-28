import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-route/history-route';
import NearPlaces from './near-places';

import {makeFakeHotel} from '../../../utils/mocks';
import { AuthorizationStatus } from '../../../const/auth-status';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
  DATA: {
    nearbyHotels: [makeFakeHotel()],
  },
});

describe('Component: Near places', () => {
  it('should render "Near Places"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlaces />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
