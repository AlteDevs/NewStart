import { FETCH_USER } from './actions';

export const fetchUser = () => ({
	type: FETCH_USER,
	payload: fetch('/api/user')
});
