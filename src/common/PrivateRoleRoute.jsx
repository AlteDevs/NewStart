import React from 'react';
import RedirectFilter from './RedirectFilter';
import PropTypes from 'prop-types';
import { RoleConsumer } from './RoleProvider';

const PrivateRoleRoute = props => (
	<RoleConsumer>
		{userData => (
			<RedirectFilter
				routeProps={props}
				userRole={props.userRole}
				redirect={props.redirect}
				condition={userData.isAuth}
			/>
		)}
	</RoleConsumer>
);

PrivateRoleRoute.propTypes = {
	redirect: PropTypes.string.isRequired,
	userRole: PropTypes.number.isRequired
};

export default PrivateRoleRoute;
