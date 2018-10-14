import { CREATE_COURSE } from './actions';

const initialState = [];

export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CREATE_COURSE + '_FULFILLED':
			return [...state, ...action.payload];
		default: {
			return initialState;
		}
	}
};
