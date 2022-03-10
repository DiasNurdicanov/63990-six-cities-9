import {createReducer} from '@reduxjs/toolkit';
import {setCity, setHotels, setSortType} from './action';
import {Offers} from '../mocks/offers';
import {CitiesCoords} from '../const/cities';
import {Cities} from '../const/cities';

const initialState = {
  city: CitiesCoords[Cities.Paris],
  hotels: [...Offers],
  sortType: 'Popular',
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