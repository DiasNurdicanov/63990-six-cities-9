import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-route/history-route';
import MainScreenEmpty from './main-empty-screen';

import {AuthorizationStatus} from '../../../const/auth-status';
import {CitiesCoords} from '../../../const/cities';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MAIN_SCREEN: {
    city: CitiesCoords.Paris,
  },
});

describe('Component: main-empty-screen', () => {
  it('should render "main-empty-screen"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreenEmpty />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find/i)).toBeInTheDocument();
  });
});
