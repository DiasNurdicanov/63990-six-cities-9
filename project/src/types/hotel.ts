import {Cities} from '../const/cities';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type City = {
  location: Location,
  name: keyof typeof Cities;
}

export type Hotel = {
  id: number;
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  city: City,
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  location: Location;
  maxAdults: number;
  previewImage: string;
  bedrooms: number;
}

export type CitiesCoordsType = {
  [Cities.Paris]: City,
  [Cities.Amsterdam]: City,
  [Cities.Brussels]: City,
  [Cities.Cologne]: City,
  [Cities.Dusseldorf]: City,
  [Cities.Hamburg]: City
}
