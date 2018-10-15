import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RoleContext = React.createContext('auth');

export const RoleConsumer = RoleContext.Consumer;

class RoleProvider extends Component {
	isAuth() {
		return this.props.auth.isAuth;
	}

	render() {
		const { user } = this.props;
		const isAuth = this.isAuth();

		return (
			<RoleContext.Provider
				value={{
					user,
					isAuth,
				}}
			>
				{this.props.children}
			</RoleContext.Provider>
		);
	}
}

RoleProvider.propTypes = {
	auth: PropTypes.shape({
		isAuth: PropTypes.bool.isRequired,
	}).isRequired,
	user: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired,
};

export default connect(state => ({
	auth: state.auth,
	user: state.user,
}), {})(RoleProvider);
