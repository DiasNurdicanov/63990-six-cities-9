import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const/auth-status';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

