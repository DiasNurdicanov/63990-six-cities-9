import {createReducer} from '@reduxjs/toolkit';
import {setCity, setHotels, setSortType, loadHotels, requireAuthorization, loadHotelById, loadReviews, loadNearbyHotels} from './action';
import {CitiesCoords} from '../const/cities';
import {Cities} from '../const/cities';
import {SortingType} from '../const/sorting';
import {AuthorizationStatus} from '../const/auth-status';

import {City, Hotel} from '../types/hotel';
import {Review} from '../types/review';

type InitalState = {
  city: City;
  hotels: Hotel[];
  sortType: SortingType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  hotel: Hotel | null;
  reviews: Review[];
  nearbyHotels: Hotel[];
}

const initialState: InitalState = {
  city: CitiesCoords[Cities.Paris],
  hotels: [],
  sortType: SortingType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  hotel: null,
  reviews: [],
  nearbyHotels: [],
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
    })
    .addCase(loadHotelById, (state, action) => {
      state.hotel = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
