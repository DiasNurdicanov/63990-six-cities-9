import {Routes, Route, Navigate} from 'react-router-dom';

import MainScreen from '../views/main-screen/main-screen';
import FavoritesScreen from '../views/favorites-screen/favorites-screen';
import LoginScreen from '../views/login-screen/login-screen';
import PropertyScreen from '../views/property-screen/property-screen';
import NotFoundScreen from '../views/not-found-screen/not-found-screen';

import {AppRoute} from '../../const/routes';
import {AuthorizationStatus} from '../../const/auth-status';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

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
        element={isAuth ? <Navigate to={AppRoute.Main} /> : <LoginScreen />}
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
