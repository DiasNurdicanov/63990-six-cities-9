import { SortingType, SortingTypes } from './const/sorting';
import { City, Hotel } from './types/hotel';

export const getOffers = (hotels: Hotel[], sortType: SortingType, city: City) =>
  hotels
    .filter((hotel) => hotel.city.name === city.name)
    .sort(SortingTypes[sortType].fn);
