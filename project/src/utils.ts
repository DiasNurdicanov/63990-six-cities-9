import { SortingType, SortingTypes } from './const/sorting';
import { City, Hotel } from './types/hotel';
import { AuthorizationStatus } from './const/auth-status';

export const getOffers = (hotels: Hotel[], sortType: SortingType, city: City) =>
  hotels
    .filter((hotel) => hotel.city.name === city.name)
    .sort(SortingTypes[sortType].fn);

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
