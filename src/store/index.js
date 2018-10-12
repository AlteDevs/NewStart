import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux'
import thunk from 'redux-thunk'

import user from './user'

const createStore = (initialState) => {
	const reduxDevTool =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	const composeWithDevTools = !reduxDevTool
		? compose
		: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

	const middleware = composeWithDevTools(
		applyMiddleware(
			thunk,
		)
	)

	const reducer = combineReducers({
		user,
	})

	return reduxCreateStore(reducer, initialState, middleware)
}

window.store = createStore()

export default createStore
