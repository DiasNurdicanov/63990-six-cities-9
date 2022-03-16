import {Navigate, RouteProps} from 'react-router-dom';

import {AuthorizationStatus} from '../../../const/auth-status';
import {AppRoute} from '../../../const/routes';

type PrivateRouteProps = RouteProps & {
  status: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({status, children}: PrivateRouteProps): JSX.Element {
  const isAuth = status === AuthorizationStatus.Auth;

  return isAuth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
