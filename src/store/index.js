import {
	applyMiddleware,
	combineReducers,
	compose,
	createStore as reduxCreateStore
} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import auth from './auth';
import user from './user';
import userTest from './userTest';
import courses from './courses';

const createStore = initialState => {
	const reduxDevTool =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	const composeWithDevTools = !reduxDevTool
		? compose
		: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

	const middleware = composeWithDevTools(
		applyMiddleware(thunk, promiseMiddleware(), createLogger())
	);

	const reducer = combineReducers({
		auth,
		userTest,
		user,
		courses
	});

	return reduxCreateStore(reducer, initialState, middleware);
};

window.store = createStore({});

export default createStore;
