import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const/name-space';
import {CitiesCoords} from '../../const/cities';
import {SortingType} from '../../const/sorting';
import {Cities} from '../../const/cities';
import {City} from '../../types/hotel';

type MainScreen = {
  city: City;
  sortType: SortingType;
}

const initialState: MainScreen = {
  city: CitiesCoords[Cities.Paris],
  sortType: SortingType.Popular,
};

export const mainScreen = createSlice({
  name: NameSpace.mainScreen,
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {setCity, setSortType} = mainScreen.actions;
