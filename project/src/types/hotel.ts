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

type City = {
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
