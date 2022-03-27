import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-route/history-route';
import MainScreen from './main-screen';

import {AuthorizationStatus} from '../../../const/auth-status';
import {makeFakeHotel} from '../../../utils/mocks';
import {SortingType} from '../../../const/sorting';

const mockStore = configureMockStore();

const mockHotel = makeFakeHotel();

describe('Component: main-screen', () => {
  it('should render "main-screen"', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
      MAIN_SCREEN: {
        city: mockHotel.city,
        sortType: SortingType.Popular,
      },
      DATA: {
        hotels: [mockHotel],
        isDataLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('should render "main-screen empty"', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
      MAIN_SCREEN: {
        city: mockHotel.city,
        sortType: SortingType.Popular,
      },
      DATA: {
        hotels: [],
        isDataLoaded: true,
      },
    });

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
