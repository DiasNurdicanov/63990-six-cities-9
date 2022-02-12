import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const AppData = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={AppData.PLACES_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
