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
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
    'name': Cities.Paris,
  },
  [Cities.Cologne]: {
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13,
    },
    'name': Cities.Cologne,
  },
  [Cities.Brussels]: {
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13,
    },
    'name': Cities.Brussels,
  },
  [Cities.Amsterdam]: {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 13,
    },
    'name': Cities.Amsterdam,
  },
  [Cities.Hamburg]: {
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13,
    },
    'name': Cities.Hamburg,
  },
  [Cities.Dusseldorf]: {
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13,
    },
    'name': Cities.Dusseldorf,
  },
};
