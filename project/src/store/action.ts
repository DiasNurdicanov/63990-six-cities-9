import {createAction} from '@reduxjs/toolkit';

import {City, Hotel} from '../types/hotel';
import {SortingType} from '../const/sorting';
import {AuthorizationStatus} from '../const/auth-status';
import {AppRoute} from '../const/routes';

export const setCity = createAction<City>('mainScreen/setCity');

export const setHotels = createAction<Hotel[]>('mainScreen/setHotels');

export const setSortType = createAction<SortingType>('mainScreen/setSortType');

export const loadHotels = createAction<Hotel[]>('data/loadHotels');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
