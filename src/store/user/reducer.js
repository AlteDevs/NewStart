import { FETCH_USER } from './actions';

const initialState = {
	pending: false,
	data: {},
	error: null
};

export default (state, action) => {
	const { type, payload, error } = action;

	switch (type) {
		case FETCH_USER + '_PENDING': {
			return {
				...state,
				pending: true
			};
		}

		case FETCH_USER + '_FULFILLED': {
			return {
				...state,
				pending: false,
				data: payload,
				error: null
			};
		}

		case FETCH_USER + '_REJECTED': {
			return {
				...state,
				pending: false,
				error: error
			};
		}

		default: {
			return initialState;
		}
	}
};
