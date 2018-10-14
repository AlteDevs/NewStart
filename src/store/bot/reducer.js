import { SEND_MESSAGE } from './actions';

const initialState = {
	pending: false,
	messages: [],
	error: null
};

export default (state, action) => {
	const { type, payload, error } = action;
	console.log('action', action);
	switch (type) {
		case SEND_MESSAGE + '_PENDING': {
			return {
				...state,
				pending: true
			};
		}

		case SEND_MESSAGE + '_FULFILLED': {
			return {
				...state,
				messages: [
					...initialState.messages,
					...[payload],
				],
				error: null
			};
		}

		case SEND_MESSAGE + '_REJECTED': {
			return {
				...state,
				pending: false,
				error
			};
		}

		default: {
			return initialState;
		}
	}
};
