import React from 'react';
import RedirectFilter from './RedirectFilter';
import { RoleConsumer } from './RoleProvider';

const PrivateRoute = props => (
	<RoleConsumer>
		{userData => (
			<RedirectFilter
				routeProps={props}
				redirect="/login"
				condition={userData.isAuth}
			/>
		)}
	</RoleConsumer>
);

export default PrivateRoute;
