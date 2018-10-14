import { FETCH_USER } from './actions';
import { apiUrl } from '../../constants/api';

export const fetchUser = (id) => ({
	type: FETCH_USER,
	payload: fetch(`${apiUrl}/get_user?user_id=${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
	}).then(async res => {
		const response = await res.json();
		if (response.status === 'Error' || response.status === 401) {
			throw response;
		}

		return response;
	})
});
