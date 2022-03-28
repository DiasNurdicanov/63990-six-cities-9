import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../../common/history-router/history-router';
import NotFoundScreen from './not-found-screen';

import {AuthorizationStatus} from '../../../const/auth-status';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
});

describe('Component: NotFoundScreen', () => {
  it('should render "NotFoundScreen"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
