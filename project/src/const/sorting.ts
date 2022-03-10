import { Hotel } from '../types/hotel';

export enum SortingType {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  Rating = 'Top rated first',
}

type SortingTypesType = {
  [key: string]: {
    name: SortingType,
    fn: ((a: Hotel, b: Hotel) => number)
  }
}

export const SortingTypes: SortingTypesType = {
  Popular: {
    name: SortingType.Popular,
    fn: (a: Hotel, b: Hotel) => 0,
  },
  PriceAsc: {
    name: SortingType.PriceAsc,
    fn: (a: Hotel, b: Hotel) => a.price - b.price,
  },
  PriceDesc: {
    name: SortingType.PriceDesc,
    fn: (a: Hotel, b: Hotel) => b.price - a.price,
  },
  Rating: {
    name: SortingType.Rating,
    fn: (a: Hotel, b: Hotel) => b.rating - a.rating,
  },
};
