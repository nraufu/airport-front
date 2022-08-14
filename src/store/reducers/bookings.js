import {success} from '../../utils/actions.js';

const initialState = {
    bookings: [],
    booking: {},
}

const bookings = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_BOOKING'):
            return {
				...state,
				bookings: [action.payload.booking, ...state.bookings],
				booking: action.payload.booking,
			};

        case success('GET_BOOKINGS'):
            return {
                ...state,
                bookings: action.payload.bookings,
            };

        case success('GET_BOOKING'):
            return {
                ...state,
                booking: action.payload.booking,
            };

        case success('DELETE_BOOKING'):
            return {
                ...state,
                bookings: state.bookings.filter(
                    (item) => item._id !== action.payload
                ),
            };
        case success('APPROVE_BOOKING'):
            return { ...state};
            
        case success('REJECT_BOOKING'):
            return { ...state};

        default:
            return state;
    }
}

export default bookings;