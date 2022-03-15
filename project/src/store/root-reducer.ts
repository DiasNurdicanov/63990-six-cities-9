import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/name-space';
import {appData} from './app-data/app-data';
import {mainScreen} from './main-screen/main-screen';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: appData.reducer,
  [NameSpace.mainScreen]: mainScreen.reducer,
  [NameSpace.user]: userProcess.reducer,
});
