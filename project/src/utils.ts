import {SortingType, SortingTypes} from './const/sorting';
import {AuthorizationStatus} from './const/auth-status';
import {City, Hotel} from './types/hotel';
import {Review} from './types/review';

export const getOffers = (hotels: Hotel[], sortType: SortingType, city: City) =>
  hotels
    .filter((hotel) => hotel.city.name === city.name)
    .sort(SortingTypes[sortType].fn);

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const updateItem = (hotels: Hotel[], item: Hotel) => {
  const index = hotels.findIndex((hotel) => hotel.id === item.id);

  if (index === -1) {
    throw new Error('Can\'t update unexisting hotel');
  }

  const newHotels = hotels.slice();
  newHotels[index] = item;

  return newHotels;
};


export const removeItem = (hotels: Hotel[], item: Hotel) => {
  const index = hotels.findIndex((hotel) => hotel.id === item.id);

  if (index === -1) {
    throw new Error('Can\'t remove unexisting hotel');
  }

  const newHotels = [
    ...hotels.slice(0, index),
    ...hotels.slice(index + 1),
  ];

  return newHotels;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getSortedReviews = (reviews: Review[]) =>
  [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
