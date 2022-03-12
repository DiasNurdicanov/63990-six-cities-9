import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITY} from './mocks/city';
import {Reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchHotelsAction, checkAuthAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        city={CITY}
        reviews={Reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
