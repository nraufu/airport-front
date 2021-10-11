import { success } from '../../utils/actions.js';

const initialState = {
    reports: [],
    report: {},
};

const reports = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_REPORT'):
            return {
                ...state,
                reports: [action.payload.report, ...state.reports],
                report: action.payload.report,
            };

        case success('GET_REPORTS'):
            return {
                ...state,
                reports: action.payload.reports,
            };

        case success('DELETE_REPORT'):
            return {
                ...state,
                reports: state.reports.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default reports;
