import {success} from '../../utils/actions.js';


const initialState = {
    success: null,
    token: null,
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case success('LOGIN'):
            return  {...state,token: action.payload.token};

        default:
            return state;
    }
}

export default login;
