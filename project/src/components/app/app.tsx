import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppRoute} from '../../const/routes';
import { AuthorizationStatus } from '../../const/auth-status';

import MainScreen from '../views/main-screen/main-screen';
import FavoritesScreen from '../views/favorites-screen/favorites-screen';
import LoginScreen from '../views/login-screen/login-screen';
import PropertyScreen from '../views/property-screen/property-screen';
import NotFoundScreen from '../views/not-found-screen/not-found-screen';
import PrivateRoute from '../common/private-route/private-route';
import {Hotel} from '../../types/hotel';
import {Favorites} from '../../mocks/favorites';
import {City} from '../../types/hotel';
import {Review} from '../../types/review';

type AppProps = {
  placesCount: number;
  cards: Hotel[];
  city: City;
  reviews: Review[];
}

function App({placesCount, cards, city, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              placesCount={placesCount}
              cards={cards}
              city={city}
            />
          }
        />

        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute status={AuthorizationStatus.Auth}>
              <FavoritesScreen cards={Favorites} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Property}
          element={
            <PropertyScreen
              reviews={reviews}
              cards={Favorites}
              city={city}
            />
          }
        />

        <Route
          path='*'
          element={<NotFoundScreen />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
