import cookies from 'utils/cookies';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from './actions';

const initialState = {
	pending: false,
	isAuth: !!cookies.get('TOKEN'),
	token: cookies.get('TOKEN'),
	error: null
};

export default (state, action) => {
	const { type, payload, error } = action;

	switch (type) {
		case SIGN_IN + '_PENDING': {
			return {
				...state,
				pending: true
			};
		}

		case SIGN_IN + '_FULFILLED': {
			cookies.set('TOKEN', payload.token);
			return {
				...state,
				isAuth: true,
				token: payload.token,
				error: null
			};
		}

		case SIGN_IN + '_REJECTED': {
			cookies.set('TOKEN', null);
			return {
				...state,
				pending: false,
				isAuth: false,
				error,
			};
		}

		default: {
			return initialState;
		}
	}
};
