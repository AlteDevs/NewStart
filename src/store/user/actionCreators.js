import { createAction } from 'redux-actions';
import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCEEDED } from './actions';

const fetchPending = createAction(FETCH_PENDING);
const fetchSucceeded = createAction(FETCH_SUCCEEDED);
const fetchFailed = createAction(FETCH_FAILED);

export const fetchUser = () => {
	return async dispatch => {
		await dispatch(fetchPending());
		try {
			const res = await fetch('/api/user', {
				credentials: 'same-origin',
				method: 'GET'
			});

			const user = await res.json();
			await dispatch(fetchSucceeded(user));
		} catch (e) {
			await dispatch(fetchFailed());
		}
	};
};
