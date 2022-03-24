import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-route/history-route';
import Cities from './cities';

import {makeFakeHotel} from '../../../utils/mocks';

const mockStore = configureMockStore();
const mockHotels = [makeFakeHotel()];

const store = mockStore({
  MAIN_SCREEN: {
    city: makeFakeHotel().city,
  },
});

describe('Component: Cities', () => {
  it('should render "Cities"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Cities selectedHotels={mockHotels} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/1 places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
