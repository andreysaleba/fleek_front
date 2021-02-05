import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
  userData: persistReducer(
    {
      key: 'userDataReducer',
      storage,
      whitelist: ['jwtToken', 'email'],
    },
    userDataReducer
  ),
});

export default rootReducer;
