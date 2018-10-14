import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
	AppAside,
	AppBreadcrumb,
	AppHeader,
	AppSidebar,
	AppSidebarNav
} from '@coreui/react';
import navigation from '../../_nav';
import routes from '../../routes';
import DefaultHeader from './DefaultHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../store/user';

class DefaultLayout extends Component {
	componentDidMount() {
		const { fetchUserAction, userId } = this.props;

		fetchUserAction(userId);
	}

	render() {
		const { user } = this.props;
		const role = user.role

		return (
			<div className="app">
				<AppHeader fixed>
					<DefaultHeader role={role} />
				</AppHeader>
				<div className="app-body">
					{
						role !== 0 && <AppSidebar fixed display="lg">
							<AppSidebarNav navConfig={navigation[role]} {...this.props} />
						</AppSidebar>
					}
					<main className="main">
						<AppBreadcrumb appRoutes={routes} />
						<Container fluid>
							<Switch>
								{routes.map((route, idx) => {
									return route.component ? (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={props => <route.component {...props} />}
										/>
									) : null;
								})}
								{
									role === 0 ? <Redirect from="/" to="/chat" /> : <Redirect from="/" to="/dashboard" />
								}
							</Switch>
						</Container>
					</main>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		userId: state.auth.userId,
		user: state.user.data,
		pending: state.user.pending
	}),
	dispatch => ({
		fetchUserAction: bindActionCreators(fetchUser, dispatch)
	})
)(DefaultLayout);
