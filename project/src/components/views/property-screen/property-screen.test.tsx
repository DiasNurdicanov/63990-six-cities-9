import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-router/history-router';
import PropertyScreen from './property-screen';

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

describe('Component: PropertyScreen', () => {
  it('should render "PropertyScreen"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
