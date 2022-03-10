import {CitiesCoordsType} from '../types/hotel';

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CitiesCoords: CitiesCoordsType = {
  [Cities.Paris]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Paris,
  },
  [Cities.Cologne]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Cologne,
  },
  [Cities.Brussels]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Brussels,
  },
  [Cities.Amsterdam]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Amsterdam,
  },
  [Cities.Hamburg]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Hamburg,
  },
  [Cities.Dusseldorf]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': Cities.Dusseldorf,
  },
};
