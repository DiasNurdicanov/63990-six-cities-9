import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import HistoryRouter from '../history-route/history-route';
import AddReviewForm from './add-review-form';

import {FormState} from '../../../const/form-state';

const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    formState: FormState.Blocked,
  },
});

describe('Component: AddReviewForm', () => {
  it('should render "AddReviewForm"', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewForm hotelId={0} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('review'), 'review text');
    expect(screen.getByDisplayValue(/review text/i)).toBeInTheDocument();
  });
});
