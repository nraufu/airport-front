import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new news.
 *
 * @param {*} data news data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/news', data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('CREATE_NEWS'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all news
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/news`);

    if (response.data.status === "Success") {
        dispatch({
            type: success('GET_NEWS'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single news.
 *
 * @param {number} id news id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/news/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_SINGLE_NEWS'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Update a news.
 *
 * @param {number} id news id
 * @param {Object} data news object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (id, data) => async (dispatch) => {
    const response = await apiCall.patch(`/news/${id}`, data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_NEWS'),
            payload: response.data.data,
        });
    }

    return response.data;
};

/**
 * \-------------------------------------------------
 * Delete news
 *
 * @param {number} id news id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/news/${id}`, {headers});

    dispatch({
        type: success('DELETE_NEWS'),
        payload: id,
    });

    return response.data.data;
};

export const newsActions = {
    create,
    update,
    getSingle,
    getAll,
    remove,
};
