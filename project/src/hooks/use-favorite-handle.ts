import {useNavigate} from 'react-router-dom';
import {MouseEvent} from 'react';

import {toggleFavoriteStatus} from '../store/api-actions';

import {useAppSelector, useAppDispatch} from '../hooks';
import {AuthorizationStatus} from '../const/auth-status';
import { AppRoute } from '../const/routes';

const FAVORITE_STATUS = {
  isFavorite: 1,
  isNotFavorite: 0,
};

function useFavoriteHandle(id: number, isFavorite: boolean) {
  const dispatch = useAppDispatch();

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const navigate = useNavigate();

  const handleFavoriteClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (isAuth) {
      dispatch(toggleFavoriteStatus({
        hotelId: id,
        status: isFavorite ? FAVORITE_STATUS.isNotFavorite : FAVORITE_STATUS.isFavorite,
      }));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return handleFavoriteClick;
}

export {useFavoriteHandle};
