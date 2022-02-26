import {Hotel} from '../types/hotel';

export const Offers: Hotel[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    image: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
    },
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    image: 'img/room.jpg',
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam',
    },
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    image: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremium: false,
    city: {
      name: 'Amsterdam',
    },
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    image: 'img/apartment-03.jpg',
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
    },
  },
];