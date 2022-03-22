import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

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
import {AppDispatch, State} from '../types/state.js';

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

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.FetchHotels,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
      dispatch(loadHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.UserCheckAuth,
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.UserLogin,
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.UserLogout,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchHotelByIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.PropertyFetchHotel,
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.Hotel}${hotelId}`);
      dispatch(loadHotelById(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.PropertyFetchReviews,
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${hotelId}`);
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotelsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.PropertyFetchNearbyHotels,
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(`${APIRoute.Hotel}${hotelId}/nearby`);
      dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk<void, AddReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.PropertyAddReview,
  async ({hotelId, reviewData}, {dispatch, extra: api}) => {
    try {
      const {comment, rating} = reviewData;
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}${hotelId}`, {comment, rating});
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);


export const toggleFavoriteStatus = createAsyncThunk<void, ToggleFavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.ToggleFavorite,
  async ({hotelId, status}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Hotel>(`${APIRoute.Favorites}${hotelId}/${status}`);
      dispatch(updateHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActions.FetchFavorites,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Favorites);
      dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
