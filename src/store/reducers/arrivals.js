import {success} from '../../utils/actions.js';

const initialState = {
    arrivals: [],
    arrival: {},
}

const arrivals = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_ARRIVAL'):
            return {
				...state,
				arrivals: [action.payload.arrival, ...state.arrivals],
				arrival: action.payload.arrival,
			};

        case success('GET_ARRIVALS'):
            return {
                ...state,
                arrivals: action.payload.arrivals,
            };

        case success('GET_ARRIVAL'):
            return {
                ...state,
                arrival: action.payload.arrival,
            };

        case success('UPDATE_ARRIVAL'):
            const updatedItem = action.payload.arrival;

			const updatedItemIndex = state.arrivals.findIndex( ( el ) => {
				return el._id === updatedItem._id;
			} );

			const arrivalsData = state.arrivals;

			if ( updatedItemIndex >= 0 ) {
				arrivalsData[ updatedItemIndex ] = {
					...updatedItem,
				};
			}

			return {
				...state,
				arrivals: [ ...arrivalsData ],
			};

        case success('DELETE_ARRIVAL'):
            return {
                ...state,
                arrivals: state.arrivals.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default arrivals;