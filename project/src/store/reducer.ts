import {createReducer} from '@reduxjs/toolkit';
import {setCity, setHotels} from './action';
import { Offers } from '../mocks/offers';
import {CitiesCoords} from '../const/cities'

const initialState = {
  city: CitiesCoords[0],
  hotels: [...Offers],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setHotels, (state, action) => {
      state.hotels = action.payload;
    });
});

export {reducer};
