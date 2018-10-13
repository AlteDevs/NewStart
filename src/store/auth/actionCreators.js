import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions';
import { apiUrl } from '../../constants/api';

export const signIn = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signIn')
});

export const signUp = values => ({
	type: SIGN_UP,
	payload: fetch(`${apiUrl}/create_user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/plain, */*'
		},
		body: JSON.stringify(values)
	})
});

export const signOut = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signOut')
});
