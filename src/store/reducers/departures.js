import {success} from '../../utils/actions.js';

const initialState = {
    departures: [],
    departure: {},
}

const departures = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_DEPARTURE'):
            return {
				...state,
				departures: [action.payload.departure, ...state.departures],
				departure: action.payload.departure,
			};

        case success('GET_DEPARTURES'):
            return {
                ...state,
                departures: action.payload.departures,
            };

        case success('GET_DEPARTURE'):
            return {
                ...state,
                departure: action.payload.departure,
            };

        case success('UPDATE_DEPARTURE'):
            const updatedItem = action.payload.departure;

			const updatedItemIndex = state.departures.findIndex( ( el ) => {
				return el._id === updatedItem._id;
			} );

			const departuresData = state.departures;

			if ( updatedItemIndex >= 0 ) {
				departuresData[ updatedItemIndex ] = {
					...updatedItem,
				};
			}

			return {
				...state,
				departures: [ ...departuresData ],
			};

        case success('DELETE_DEPARTURE'):
            return {
                ...state,
                departures: state.departures.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default departures;