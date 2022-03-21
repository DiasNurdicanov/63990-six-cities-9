import {CitiesCoords} from '../../const/cities';
import {SortingType} from '../../const/sorting';
import {Cities} from '../../const/cities';

import {setCity, setSortType, mainScreen} from './main-screen';
import { getRandomInteger } from '../../utils';

const initialState = {
  city: CitiesCoords[Cities.Paris],
  sortType: SortingType.Popular,
};

const CitiesList = Object.values(Cities);
const SortingTypesList = Object.values(SortingType);
const city = CitiesCoords[CitiesList[getRandomInteger(0, CitiesList.length - 1)]];
const sortType = SortingTypesList[getRandomInteger(0, SortingTypesList.length - 1)];

describe('Reducer: appData', () => {
  it('should set city by set sity', () => {
    expect(mainScreen.reducer(initialState, setCity(city)))
      .toEqual({
        ...initialState,
        city,
      });
  });

  it('should set sort type by set sort type', () => {
    expect(mainScreen.reducer(initialState, setSortType(sortType)))
      .toEqual({
        ...initialState,
        sortType,
      });
  });
});


