import {combineReducers} from 'redux';
import loginReducer from './login';
import airlineReducer from './airlines';

const allReducers = combineReducers({
  login: loginReducer,
  airlinesState: airlineReducer,
});

export default allReducers;
