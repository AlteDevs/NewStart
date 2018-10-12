import { GET_USER } from './actions';

const initialState = {
	pending: false,
	data: {},
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER + '_PENDING':
			return {
				...state,
				pending: true
			};

		case GET_USER + '_FULFILLED':
			return {
				...state,
				pending: false,
				data: action.payload,
				error: null
			};

		case GET_USER + '_REJECTED':
			return {
				...state,
				pending: false,
				error: action.error
			};

		default:
			return state;
	}
};
