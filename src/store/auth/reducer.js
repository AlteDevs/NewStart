import cookies from 'utils/cookies';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from './actions';

const initialState = {
	pending: false,
	isAuth: !!cookies.get('TOKEN'),
	token: cookies.get('TOKEN'),
	userId: cookies.get('USER_ID'),
	error: null
};

export default (state, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case SIGN_UP + '_PENDING':
		case SIGN_IN + '_PENDING': {
			return {
				...state,
				pending: true
			};
		}

		case SIGN_UP + '_FULFILLED':
		case SIGN_IN + '_FULFILLED': {
			cookies.set('TOKEN', payload.token);
			cookies.set('USER_ID', payload.user_id);
			cookies.set('ROLE', payload.role);
			return {
				...state,
				isAuth: true,
				token: payload.token,
				userId: payload.user_id,
				error: null
			};
		}

		case SIGN_UP + '_REJECTED':
		case SIGN_IN + '_REJECTED': {
			cookies.remove('TOKEN');
			return {
				...state,
				pending: false,
				isAuth: false,
				error
			};
		}

		default: {
			return initialState;
		}
	}
};
