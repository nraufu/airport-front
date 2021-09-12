import {success} from '../../utils/actions.js';

const initialState = {
    airlines: [],
    airline: {},
}

const airlines = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_AIRLINE'):
            return {
				...state,
				airlines: [action.payload.airline, ...state.airlines],
				airline: action.payload.airline,
			};

        case success('GET_AIRLINES'):
            return {
                ...state,
                airlines: action.payload.airlines,
            };

        case success('GET_AIRLINE'):
            return {
                ...state,
                airline: action.payload.airline,
            };

        case success('UPDATE_AIRLINE'):
            const updatedItem = action.payload.airline;

			const updatedItemIndex = state.airlines.findIndex( ( el ) => {
				return el._id === updatedItem._id;
			} );

			const airlinesData = state.airlines;

			if ( updatedItemIndex >= 0 ) {
				airlinesData[ updatedItemIndex ] = {
					...updatedItem,
				};
			}

			return {
				...state,
				airlines: [ ...airlinesData ],
			};

        case success('DELETE_AIRLINE'):
            return {
                ...state,
                airlines: state.airlines.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default airlines;