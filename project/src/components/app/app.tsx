import {Routes, Route} from 'react-router-dom';

import MainScreen from '../views/main-screen/main-screen';
import FavoritesScreen from '../views/favorites-screen/favorites-screen';
import LoginScreen from '../views/login-screen/login-screen';
import PropertyScreen from '../views/property-screen/property-screen';
import NotFoundScreen from '../views/not-found-screen/not-found-screen';

import {AppRoute} from '../../const/routes';

function App(): JSX.Element {
  return (
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
  );
}

export default App;
