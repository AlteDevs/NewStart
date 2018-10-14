import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions';
import { apiUrl } from '../../constants/api';

export const signIn = values => ({
	type: SIGN_IN,
	payload: fetch(`${apiUrl}/auth_user`, {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(values)
	}).then(async res => {
		const response = await res.json();
		if (response.status === 'Error' || response.status === 401) {
			throw response;
		}
		console.log(response);

		return response;
	})
});

export const signUp = values => ({
	type: SIGN_UP,
	payload: fetch(`${apiUrl}/create_user`, {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(values)
	}).then(async res => {
		const response = await res.json();
		if (response.status === 'Error' || response.status === 401) {
			throw response;
		}

		return response;
	})
});

export const signOut = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signOut')
});
