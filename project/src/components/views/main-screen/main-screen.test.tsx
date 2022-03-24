import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-route/history-route';
import MainScreen from './main-screen';

import {AuthorizationStatus} from '../../../const/auth-status';
import {CitiesCoords} from '../../../const/cities';
import {makeFakeHotel} from '../../../utils/mocks';
import {SortingType} from '../../../const/sorting';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MAIN_SCREEN: {
    city: CitiesCoords.Paris,
    sortType: SortingType.Popular,
  },
  DATA: {
    hotels: [makeFakeHotel()],
    isDataLoaded: true,
  },
});

describe('Component: main-screen', () => {
  it('should render "main-screen"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find/i)).toBeInTheDocument();
  });
});
