import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-route/history-route';
import Header from './header';
import { AuthorizationStatus } from '../../../const/auth-status';

const mockStore = configureMockStore();

const storeAuth = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});

const storeNoAuth = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
});

describe('Component: Header', () => {
  it('should render "Header" when Auth', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={storeAuth}>
        <HistoryRouter history={history}>
          <Header showNav />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render "Header" when NoAuth', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={storeNoAuth}>
        <HistoryRouter history={history}>
          <Header showNav />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
