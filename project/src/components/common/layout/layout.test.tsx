import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-route/history-route';
import Layout from './layout';

import {AuthorizationStatus} from '../../../const/auth-status';

const mockStore = configureMockStore();

const storeAuth = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus,
  },
});

describe('Component: Layout', () => {
  it('should render "Layout"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={storeAuth}>
        <HistoryRouter history={history}>
          <Layout>
            <p>This is children component</p>
          </Layout>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/This is children component/i)).toBeInTheDocument();
  });
});
