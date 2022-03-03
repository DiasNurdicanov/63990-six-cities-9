import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Offers } from './mocks/offers';
import {CITY} from './mocks/city';
import {Reviews} from './mocks/reviews';

const AppSettings = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={AppSettings.PLACES_COUNT}
      cards={Offers}
      city={CITY}
      reviews={Reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
