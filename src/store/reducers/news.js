import {success} from '../../utils/actions.js';

const initialState = {
    news: [],
    singleNews: {},
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case success('CREATE_NEWS'):
            return {
				...state,
				news: [action.payload.news, ...state.news],
				singleNews: action.payload.news,
			};

        case success('GET_NEWS'):
            return {
                ...state,
                news: action.payload.news,
            };

        case success('GET_SINGLE_NEWS'):
            return {
                ...state,
                singleNews: action.payload.news,
            };

        case success('UPDATE_NEWS'):
            const updatedItem = action.payload.news;

			const updatedItemIndex = state.news.findIndex( ( el ) => {
				return el._id === updatedItem._id;
			} );

			const newsData = state.news;

			if ( updatedItemIndex >= 0 ) {
				newsData[ updatedItemIndex ] = {
					...updatedItem,
				};
			}

			return {
				...state,
				news: [ ...newsData ],
			};

        case success('DELETE_NEWS'):
            return {
                ...state,
                news: state.news.filter(
                    (item) => item._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default news;