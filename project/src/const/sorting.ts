import { Hotel } from '../types/hotel';

export enum SortingType {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  Rating = 'Top rated first',
}

type SortingTypesType = {
  [key in SortingType]: {
    name: SortingType,
    fn: ((a: Hotel, b: Hotel) => number)
  }
}

export const SortingTypes: SortingTypesType = {
  [SortingType.Popular]: {
    name: SortingType.Popular,
    fn: (a: Hotel, b: Hotel) => 0,
  },
  [SortingType.PriceAsc]: {
    name: SortingType.PriceAsc,
    fn: (a: Hotel, b: Hotel) => a.price - b.price,
  },
  [SortingType.PriceDesc]: {
    name: SortingType.PriceDesc,
    fn: (a: Hotel, b: Hotel) => b.price - a.price,
  },
  [SortingType.Rating]: {
    name: SortingType.Rating,
    fn: (a: Hotel, b: Hotel) => b.rating - a.rating,
  },
};
