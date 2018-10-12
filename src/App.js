import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import { DefaultLayout } from './containers';
import { Login, Page404, Page500, Register } from './views/Pages';

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<HashRouter>
					<Switch>
						<Route exact path="/login" name="Login Page" component={Login} />
						<Route
							exact
							path="/register"
							name="Register Page"
							component={Register}
						/>
						<Route exact path="/404" name="Page 404" component={Page404} />
						<Route exact path="/500" name="Page 500" component={Page500} />
						{/*<Route path="/" name="Home" component={DefaultLayout} />*/}
						<Route path="/" name="Home" component={Register} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
