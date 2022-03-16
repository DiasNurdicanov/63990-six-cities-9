import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const/name-space';
import {Hotel} from '../../types/hotel';
import {Review} from '../../types/review';
import {removeItem, updateItem} from '../../utils';

type InitalState = {
  hotels: Hotel[];
  isDataLoaded: boolean;
  hotel: Hotel | null;
  reviews: Review[];
  nearbyHotels: Hotel[];
  favorites: Hotel[];
}

const initialState: InitalState = {
  hotels: [],
  isDataLoaded: false,
  hotel: null,
  reviews: [],
  nearbyHotels: [],
  favorites: [],
};

export const appData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadHotels: (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    },
    loadHotelById: (state, action) => {
      state.hotel = action.payload;
      state.isDataLoaded = true;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    },
    loadNearbyHotels: (state, action) => {
      state.nearbyHotels = action.payload;
      state.isDataLoaded = true;
    },
    updateHotel: (state, action) => {
      if (state.hotels.length) {
        state.hotels = updateItem(state.hotels, action.payload);
      }

      if (state.favorites.length) {
        state.favorites = removeItem(state.favorites, action.payload);
      }
    },
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadHotels, loadHotelById, loadReviews, loadNearbyHotels, updateHotel, loadFavorites} = appData.actions;
