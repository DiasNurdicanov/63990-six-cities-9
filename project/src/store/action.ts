import {createAction} from '@reduxjs/toolkit';

import {City, Hotel} from '../types/hotel';
import {SortingType} from '../const/sorting';
import {AuthorizationStatus} from '../const/auth-status';
import {AppRoute} from '../const/routes';
import {Review} from '../types/review';

export const setCity = createAction<City>('mainScreen/setCity');
export const setHotels = createAction<Hotel[]>('mainScreen/setHotels');
export const setSortType = createAction<SortingType>('mainScreen/setSortType');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const loadHotels = createAction<Hotel[]>('data/loadHotels');
export const loadHotelById = createAction<Hotel>('data/loadHotelById');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const loadNearbyHotels = createAction<Hotel[]>('data/loadNearbyHotels');
