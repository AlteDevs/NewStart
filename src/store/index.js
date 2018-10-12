import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux'
import thunk from 'redux-thunk'

<<<<<<< Updated upstream
import user from './user'
=======
import user from './user';
import userTest from './userTest';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
	})
=======
		userTest
	});
>>>>>>> Stashed changes

	return reduxCreateStore(reducer, initialState, middleware)
}

window.store = createStore()

export default createStore
