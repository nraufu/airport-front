import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new driver.
 *
 * @param {*} data driver data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/driver', data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('CREATE_DRIVER'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all drivers
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/drivers`);

    if (response.data.status === "Success") {
        dispatch({
            type: success('GET_DRIVERS'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single driver.
 *
 * @param {number} id driver id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/driver/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_DRIVER'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Update a driver.
 *
 * @param {number} id driver id
 * @param {Object} data driver object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (id, data) => async (dispatch) => {
    const response = await apiCall.patch(`/driver/${id}`, data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_DRIVER'),
            payload: response.data.data,
        });
    }

    return response.data;
};

/**
 * \-------------------------------------------------
 * Delete driver
 *
 * @param {number} id driver id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/driver/${id}`, {headers});

    dispatch({
        type: success('DELETE_DRIVER'),
        payload: id,
    });

    return response.data.data;
};

export const driverActions = {
    create,
    update,
    getSingle,
    getAll,
    remove,
};
