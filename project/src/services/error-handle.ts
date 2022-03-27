import request from 'axios';
import {toast} from 'react-toastify';

import {store} from '../store';
import {redirectToRoute} from '../store/action';

import {ErrorType} from '../types/error';
import {HTTP_CODE} from '../const/http-codes';
import {AppRoute} from '../const/routes';
import {ErrorSubtypes} from '../const/error-subtypes';
import {setFormState} from '../store/app-data/app-data';
import {FormState} from '../const/form-state';

export const errorHandle = (error: ErrorType, subtype?: ErrorSubtypes): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.SignIn));
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  }

  if (subtype) {
    switch (subtype) {
      case ErrorSubtypes.HotelNotFound:
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
      case ErrorSubtypes.ReviewNotSend:
        store.dispatch(setFormState(FormState.Unblocked));
        break;
    }
  }
};
