import { combineReducers } from 'redux';
import loginReducer from './login';
import airlineReducer from './airlines';
import arrivalReducer from './arrivals';
import departureReducer from './departures';
import newsReducer from './news';
import passwordReducer from './passwords';
import reportReducer from './reports';
import driverReducer from './drivers';
import bookingReducer from './bookings';

const allReducers = combineReducers({
    login: loginReducer,
    airlinesState: airlineReducer,
    arrivalsState: arrivalReducer,
    departuresState: departureReducer,
    newsState: newsReducer,
    passwordState: passwordReducer,
    reportsState: reportReducer,
    driversState: driverReducer,
    bookingsState: bookingReducer,
});

export default allReducers;
