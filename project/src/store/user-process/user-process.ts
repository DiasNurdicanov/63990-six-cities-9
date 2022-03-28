import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const/name-space';
import {AuthorizationStatus} from '../../const/auth-status';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const {requireAuthorization, loadUserData} = userProcess.actions;
