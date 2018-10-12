import { GET_USER } from './actions';

export const fetchUser = () => ({
	type: GET_USER,
	payload: fetch('/api/user')
});
