import {combineReducers} from 'redux';

import username from './usernameReducer';
import notification from './notificationReducer';
import getDataReducer from './getDataReducer';
import registerUser from './registerUserReducer';

const reducer= combineReducers({registerUser,username,notification,data:getDataReducer});

export default reducer;