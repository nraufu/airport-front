import {success} from '../../utils/actions.js';

const initialState = {
    drivers: [],
    driver: {},
}

const drivers = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_DRIVER'):
            return {
				...state,
				drivers: [action.payload.driver, ...state.drivers],
				driver: action.payload.driver,
			};

        case success('GET_DRIVERS'):
            return {
                ...state,
                drivers: action.payload.drivers,
            };

        case success('GET_DRIVER'):
            return {
                ...state,
                driver: action.payload.driver,
            };

        case success('UPDATE_DRIVER'):
            const updatedItem = action.payload.driver;

			const updatedItemIndex = state.drivers.findIndex( ( el ) => {
				return el._id === updatedItem._id;
			} );

			const driversData = state.drivers;

			if ( updatedItemIndex >= 0 ) {
				driversData[ updatedItemIndex ] = {
					...updatedItem,
				};
			}

			return {
				...state,
				drivers: [ ...driversData ],
			};

        case success('DELETE_DRIVER'):
            return {
                ...state,
                drivers: state.drivers.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default drivers;