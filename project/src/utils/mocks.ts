import {internet, address, lorem, datatype, image} from 'faker';
import { Cities} from '../const/cities';
import {Hotel} from '../types/hotel';
import { Review } from '../types/review';
import {getRandomInteger} from '../utils';

const CitiesList = Object.values(Cities);

export const makeFakeHotel = (): Hotel => ({
  bedrooms: getRandomInteger(1, 4),
  city: {
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 10,
    },
    name: CitiesList[getRandomInteger(0, CitiesList.length - 1)],
  },
  description: lorem.text(),
  goods: [lorem.word()],
  host: {
    avatarUrl: internet.avatar(),
    id: getRandomInteger(0, 10),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: getRandomInteger(0, 10),
  images: [image.image()],
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 8,
  },
  maxAdults: getRandomInteger(0, 10),
  previewImage: image.image(),
  price: getRandomInteger(0, 1000),
  rating: getRandomInteger(1, 5),
  title: lorem.text(),
  type: lorem.word(),
} as Hotel);

export const makeFakeReview = (): Review => ({
  comment: lorem.text(),
  date: datatype.datetime().toUTCString(),
  id: getRandomInteger(0, 10),
  rating: getRandomInteger(1, 5),
  user: {
    avatarUrl: internet.avatar(),
    id: getRandomInteger(0, 10),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
} as Review);
