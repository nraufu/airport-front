import { success } from '../../utils/actions.js';

const initialState = {
    message: '',
};

const airlines = (state = initialState, action) => {
    switch (action.type) {
        case success('UPDATE_PASSWORD'):
            return {
                ...state,
                message: action.payload.message,
            };

        default:
            return state;
    }
};

export default airlines;
