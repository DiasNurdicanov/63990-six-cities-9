import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import HistoryRouter from '../../common/history-route/history-route';
import LoginScreen from './login-screen';
import { AuthorizationStatus } from '../../../const/auth-status';

const mockStore = configureMockStore();

describe('Component: LoginScreen', () => {
  it('should render "LoginScreen"', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({USER: {authorizationStatus: AuthorizationStatus.Auth}})}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('sign-in-title')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('e-mail'), 'test@test.ru');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
