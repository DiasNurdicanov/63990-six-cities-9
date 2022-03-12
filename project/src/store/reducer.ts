import {createReducer} from '@reduxjs/toolkit';
import {setCity, setHotels, setSortType, loadHotels, requireAuthorization} from './action';
import {CitiesCoords} from '../const/cities';
import {Cities} from '../const/cities';
import {SortingType} from '../const/sorting';
import {AuthorizationStatus} from '../const/auth-status';

import {City, Hotel} from '../types/hotel';

type InitalState = {
  city: City;
  hotels: Hotel[];
  sortType: SortingType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
}

const initialState: InitalState = {
  city: CitiesCoords[Cities.Paris],
  hotels: [],
  sortType: SortingType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setHotels, (state, action) => {
      state.hotels = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
