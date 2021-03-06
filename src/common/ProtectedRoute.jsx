import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter
class ProtectedRoute extends Component {
	renderProtected = routeProps => {
		const { component: ProtectedComponent, authorized, history } = this.props;

		return authorized ? (
			<ProtectedComponent {...routeProps} />
		) : history.push('/login')
	};

	render() {
		const { component, ...rest } = this.props;

		return (
			<div>
				<Route {...rest} render={this.renderProtected} />
			</div>
		);
	}
}

export default connect(
	state => ({
		authorized: !!state.user.data
	}),
	null,
	null,
	{ pure: false }
)(ProtectedRoute);
