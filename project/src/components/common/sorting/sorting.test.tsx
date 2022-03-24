import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';

import HistoryRouter from '../history-route/history-route';
import Sorting from './sorting';

import {NameSpace} from '../../../const/name-space';
import {SortingType} from '../../../const/sorting';

const mockStore = configureMockStore();

const store = mockStore({
  MAIN_SCREEN: {
    sortType: SortingType.Popular,
  },
});

describe('Component: Locations', () => {
  it('should render "Locations"', () => {
    const history = createMemoryHistory();

    const dispatch = jest.fn();

    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sorting />
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByText(SortingType.PriceAsc));

    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: `${NameSpace.mainScreen}/setSortType`,
      payload: SortingType.PriceAsc,
    });

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
