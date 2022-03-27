import {createSlice} from '@reduxjs/toolkit';


import {NameSpace} from '../../const/name-space';
import {Hotel} from '../../types/hotel';
import {Review} from '../../types/review';
import {removeItem, updateItem} from '../../utils';
import {FormState} from '../../const/form-state';

type InitalState = {
  hotels: Hotel[];
  isDataLoaded: boolean;
  hotel: Hotel | null;
  reviews: Review[];
  nearbyHotels: Hotel[];
  favorites: Hotel[];
  formState: FormState;
}

const initialState: InitalState = {
  hotels: [],
  isDataLoaded: false,
  hotel: null,
  reviews: [],
  nearbyHotels: [],
  favorites: [],
  formState: FormState.Blocked,
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

      if (state.hotel) {
        state.hotel = action.payload;
      }

      if (state.nearbyHotels.length) {
        state.nearbyHotels = updateItem(state.nearbyHotels, action.payload);
      }
    },
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
      state.isDataLoaded = true;
    },
    resetLoadedFlag: (state) => {
      state.isDataLoaded = false;
    },
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
  },
});

export const {loadHotels, loadHotelById, loadReviews, loadNearbyHotels, updateHotel, loadFavorites, resetLoadedFlag, setFormState} = appData.actions;
