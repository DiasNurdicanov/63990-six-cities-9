import {createAsyncThunk} from '@reduxjs/toolkit';

import {api} from '../store';
import {store} from '../store';
import {redirectToRoute} from './action';
import {loadHotels, loadHotelById, loadReviews, loadNearbyHotels, updateHotel, loadFavorites} from './app-data/app-data';
import {requireAuthorization} from './user-process/user-process';

import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {APIRoute} from '../const/api-routes';
import {AuthorizationStatus} from '../const/auth-status';
import {AppRoute} from '../const/routes';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Hotel} from '../types/hotel';
import {Review} from '../types/review';
import {AddReview} from '../types/add-review';
import {ToggleFavoriteStatus} from '../types/toggle-favorite-status';

enum ApiActions {
  FetchHotels = 'data/fetchHotels',
  FetchFavorites = 'data/fetchFavorites',
  ToggleFavorite = 'data/toggleFavorite',
  UserCheckAuth = 'user/checkAuth',
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
  PropertyFetchHotel = 'property/fetchHotelById',
  PropertyFetchReviews = 'property/fetchReviews',
  PropertyFetchNearbyHotels = 'property/fetchNearbyHotels',
  PropertyAddReview = 'property/addReview',
}

export const fetchHotelsAction = createAsyncThunk(
  ApiActions.FetchHotels,
  async () => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
      store.dispatch(loadHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  ApiActions.UserCheckAuth,
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  ApiActions.UserLogin,
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  ApiActions.UserLogout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchHotelByIdAction = createAsyncThunk(
  ApiActions.PropertyFetchHotel,
  async (hotelId: string) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.Hotel}${hotelId}`);
      store.dispatch(loadHotelById(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  ApiActions.PropertyFetchReviews,
  async (hotelId: string) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${hotelId}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotelsAction = createAsyncThunk(
  ApiActions.PropertyFetchNearbyHotels,
  async (hotelId: string) => {
    try {
      const {data} = await api.get<Hotel[]>(`${APIRoute.Hotel}${hotelId}/nearby`);
      store.dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  ApiActions.PropertyAddReview,
  async ({hotelId, reviewData}: AddReview) => {
    try {
      const {comment, rating} = reviewData;
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}${hotelId}`, {comment, rating});
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);


export const toggleFavoriteStatus = createAsyncThunk(
  ApiActions.ToggleFavorite,
  async ({hotelId, status}: ToggleFavoriteStatus) => {
    try {
      const {data} = await api.post<Hotel>(`${APIRoute.Favorites}${hotelId}/${status}`);
      store.dispatch(updateHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk(
  ApiActions.FetchFavorites,
  async () => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Favorites);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
