import {createAction} from '@reduxjs/toolkit';

import { City, Hotel } from '../types/hotel';
import { SortingType } from '../const/sorting';

export const setCity = createAction<City>('mainScreen/setCity');

export const setHotels = createAction<Hotel[]>('mainScreen/setHotels');

export const setSortType = createAction<SortingType>('mainScreen/setSortType');
