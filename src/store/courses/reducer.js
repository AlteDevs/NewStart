import { CREATE_COURSE, FETCH_COURSES } from './actions';

const initialState = {
	items: [],
	pending: false,
	loading: false
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_COURSES + '_FULFILLED':
			return {
				items: [...action.payload.courses],
				pending: false,
				loading: false
			};
		default:
			return initialState;
	}
};
