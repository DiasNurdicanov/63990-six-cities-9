import {createReducer} from '@reduxjs/toolkit';
import {setCity, setHotels, setSortType} from './action';
import {Offers} from '../mocks/offers';
import {CitiesCoords} from '../const/cities';
import {Cities} from '../const/cities';
import {SortingType} from '../const/sorting';

const initialState = {
  city: CitiesCoords[Cities.Paris],
  hotels: [...Offers],
  sortType: SortingType.Popular,
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
    });
});

export {reducer};
