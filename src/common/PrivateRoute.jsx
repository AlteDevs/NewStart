import React from 'react';
import RedirectFilter from 'common/RedirectFilter';
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
