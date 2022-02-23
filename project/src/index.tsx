import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { OffersData } from './mocks/offers';

const AppData = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={AppData.PLACES_COUNT} cards={OffersData} />
  </React.StrictMode>,
  document.getElementById('root'));
