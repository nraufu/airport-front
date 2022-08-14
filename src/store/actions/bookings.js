import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new booking.
 *
 * @param {*} data booking data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/booking', data);

    if (response.data.status) {
        dispatch({
            type: success('CREATE_BOOKING'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all bookings
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/bookings`);

    if (response.data.status === 'Success') {
        dispatch({
            type: success('GET_BOOKINGS'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single booking.
 *
 * @param {number} id booking id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/booking/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_BOOKING'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Delete booking
 *
 * @param {number} id booking id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/booking/${id}`, { headers });

    dispatch({
        type: success('DELETE_BOOKING'),
        payload: id,
    });

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * approve booking
 *
 * @param {number} bookingID booking id
 * @param {number} driverID booking id
 * @return {void} void
 * /-------------------------------------------------
 */
const approve = (bookingID, driverID) => async (dispatch) => {
    const response = await apiCall.post(
        `/booking/approve`,
        { bookingID, driverID },
        { headers }
    );

    dispatch({
        type: success('APPROVE_BOOKING'),
        payload: { bookingID, driverID },
    });

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * approve booking
 *
 * @param {number} bookingID booking id
 * @return {void} void
 * /-------------------------------------------------
 */
const reject = (bookingID) => async (dispatch) => {
    const response = await apiCall.post(
        `/booking/reject`,
        { bookingID },
        { headers }

    );

    dispatch({
        type: success('REJECT_BOOKING'),
        payload: { bookingID },
    });

    return response.data.data;
}

export const bookingActions = {
    create,
    getSingle,
    getAll,
    remove,
    approve,
    reject,
};
