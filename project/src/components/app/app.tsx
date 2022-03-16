import {Routes, Route} from 'react-router-dom';

import MainScreen from '../views/main-screen/main-screen';
import FavoritesScreen from '../views/favorites-screen/favorites-screen';
import LoginScreen from '../views/login-screen/login-screen';
import PropertyScreen from '../views/property-screen/property-screen';
import NotFoundScreen from '../views/not-found-screen/not-found-screen';
import HistoryRouter from '../common/history-route/history-route';

import browserHistory from '../../browser-history';
import {AppRoute} from '../../const/routes';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />

        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <FavoritesScreen />
          }
        />

        <Route
          path={AppRoute.Property}
          element={
            <PropertyScreen />
          }
        />

        <Route
          path='*'
          element={<NotFoundScreen />}
        />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
