import { FETCH_COURSE } from './actions';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_COURSE + '_FULFILLED':
			return {
				...action.payload
			};
		default:
			return {};
	}
};
