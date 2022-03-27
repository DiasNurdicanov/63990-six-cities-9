import {userProcess, requireAuthorization} from './user-process';

import {AuthorizationStatus} from '../../const/auth-status';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userEmail: ''});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, userEmail: 'test@test.ru'};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, userEmail: 'test@test.ru'};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
  });
});
