import {combineReducers} from '@reduxjs/toolkit';

import {appData} from './app-data/app-data';
import {mainScreen} from './main-screen/main-screen';
import {userProcess} from './user-process/user-process';

import {NameSpace} from '../const/name-space';

export const rootReducer = combineReducers({
  [NameSpace.data]: appData.reducer,
  [NameSpace.mainScreen]: mainScreen.reducer,
  [NameSpace.user]: userProcess.reducer,
});
