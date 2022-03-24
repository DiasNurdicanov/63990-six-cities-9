import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-route/history-route';
import Property from './property';

import {AuthorizationStatus} from '../../../const/auth-status';
import {makeFakeHotel, makeFakeReview} from '../../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  USER: AuthorizationStatus.Auth,
  DATA: {
    hotel: makeFakeHotel(),
    reviews: [makeFakeReview()],
    nearbyHotels: [makeFakeHotel()],
  },
});

describe('Component: Property', () => {
  it('should render "Property"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Property />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
