import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchHotelsAction, checkAuthAction, fetchHotelByIdAction, fetchReviewsAction, fetchNearbyHotelsAction, fetchFavorites} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import browserHistory from './browser-history';
import {AppRoute} from './const/routes';

store.dispatch(checkAuthAction());

const {pathname} =  browserHistory.location;
const OFFER_PATH = '/offer/';

switch (pathname) {
  case AppRoute.Main:
    store.dispatch(fetchHotelsAction());
    break;
  case pathname.startsWith(OFFER_PATH) ? pathname : '':
    store.dispatch(fetchHotelByIdAction(pathname.replace(OFFER_PATH, '')));
    store.dispatch(fetchReviewsAction(pathname.replace(OFFER_PATH, '')));
    store.dispatch(fetchNearbyHotelsAction(pathname.replace(OFFER_PATH, '')));
    break;
  case AppRoute.Favorites:
    store.dispatch(fetchFavorites());
    break;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
