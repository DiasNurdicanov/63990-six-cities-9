import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';

import HistoryRouter from '../history-router/history-router';
import Locations from './locations';

import {CitiesCoords} from '../../../const/cities';
import {makeFakeHotel} from '../../../utils/mocks';
import {NameSpace} from '../../../const/name-space';

const mockStore = configureMockStore();

const store = mockStore({
  MAIN_SCREEN: {
    city: makeFakeHotel().city,
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
          <Locations cities={CitiesCoords} />
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('Amsterdam'));

    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: `${NameSpace.mainScreen}/setCity`,
      payload: CitiesCoords.Amsterdam,
    });

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
