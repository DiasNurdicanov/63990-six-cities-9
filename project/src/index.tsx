import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITY} from './mocks/city';
import {Reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        city={CITY}
        reviews={Reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
