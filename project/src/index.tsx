import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import {store} from './store';
import {checkAuthAction} from './store/api-actions';

import App from './components/app/app';
import HistoryRouter from './components/common/history-route/history-route';

import browserHistory from './browser-history';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
