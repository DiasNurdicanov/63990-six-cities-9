import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import HistoryRouter from '../history-router/history-router';
import PlaceCardsListProps from './place-cards-list';

import {makeFakeHotel} from '../../../utils/mocks';
import { AuthorizationStatus } from '../../../const/auth-status';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
});
const cards = [makeFakeHotel()];

describe('Component: PlaceCardssList', () => {
  it('should render "PlaceCardssList"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlaceCardsListProps cards={cards} onCardHover={jest.fn()} onCardHoverReset={jest.fn()} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });
});
