import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectFilter = ({ condition, redirect, routeProps, userRole }) => {
	const { component: Comp, ...restProps } = routeProps;
	return condition ? (
		<Route
			{...restProps}
			render={props => <Comp {...props} userRole={userRole} />}
		/>
	) : (
		<Redirect to={redirect} />
	);
};

RedirectFilter.defaultProps = {
	userRole: ''
};

RedirectFilter.propTypes = {
	condition: PropTypes.bool.isRequired,
	redirect: PropTypes.string.isRequired,
	routeProps: PropTypes.object.isRequired,
	userRole: PropTypes.string
};

export default RedirectFilter;
