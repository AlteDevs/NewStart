import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions';
import { apiUrl } from '../../constants/api';

export const signIn = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signIn')
});

export const signUp = values => {
	console.log('values', values);
	return {
		type: SIGN_UP,
		payload: fetch(`${apiUrl}/create_user`, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				Accept: 'application/json, text/plain, */*',
				// 'X-XSRF-TOKEN': token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		})
	};
};

export const signOut = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signOut')
});
