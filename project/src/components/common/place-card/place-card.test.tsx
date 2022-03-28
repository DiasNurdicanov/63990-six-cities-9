import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';

import HistoryRouter from '../history-router/history-router';
import PlaceCard from './place-card';

import {makeFakeHotel} from '../../../utils/mocks';
import {AuthorizationStatus} from '../../../const/auth-status';

const mockCard = makeFakeHotel();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, userEmail: 'test@test.ru'},
});

describe('Component: PlaceCard', () => {
  it('should render "PlaceCard"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlaceCard
            hotel={mockCard}
            wrapClass='near-places__card'
            imageClass='near-places__image-wrapper'
            imageSize='medium'
          />,
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });
});
