import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';

import HistoryRouter from '../history-route/history-route';
import PlaceCard from './place-card';

import {makeFakeHotel} from '../../../utils/mocks';

const mockCard = makeFakeHotel();
const mockStore = configureMockStore();

describe('Component: PlaceCard', () => {
  it('should render "PlaceCard"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
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
