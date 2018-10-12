import { FETCH_PENDING, FETCH_SUCCEEDED, FETCH_FAILED } from './actions';

const initialState = {
	pending: false,
	data: {},
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PENDING:
			return {
				...state,
				pending: true
			};

		case FETCH_SUCCEEDED:
			return {
				...state,
				pending: false,
				data: action.payload,
				error: null
			};

		case FETCH_FAILED:
			return {
				...state,
				pending: false,
				error: action.error
			};

		default:
			return state;
	}
};
