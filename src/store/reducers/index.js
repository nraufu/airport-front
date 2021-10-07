import { combineReducers } from 'redux';
import loginReducer from './login';
import airlineReducer from './airlines';
import arrivalReducer from './arrivals';
import departureReducer from './departures';
import newsReducer from './news';
import passwordReducer from './passwords';

const allReducers = combineReducers({
    login: loginReducer,
    airlinesState: airlineReducer,
    arrivalsState: arrivalReducer,
    departuresState: departureReducer,
    newsState: newsReducer,
    passwordState: passwordReducer,
});

export default allReducers;
