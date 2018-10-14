import { SEND_MESSAGE } from './actions';
import { apiUrl } from '../../constants/api';
import cookies from '../../utils/cookies';

export const sendMessage = values => ({
	type: SEND_MESSAGE,
	payload: fetch(`${apiUrl}/message`, {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user_id: cookies.get('USER_ID'),
			...values,
		})
	})
		.then(async res => {
			const response = await res.json()
			if(response.status === 'Error' || response.status === 401) {
				throw response
			}

			return response
		})
});
