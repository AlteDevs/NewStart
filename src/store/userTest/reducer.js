import { SET_ANSWER } from './actions';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ANSWER:
			return [...state, action.answer];
		default:
			return state;
	}
};
