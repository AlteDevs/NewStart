import React from 'react';
import RedirectFilter from 'common/RedirectFilter';
import { RoleConsumer } from './RoleProvider';

const PublicRoute = props => (
	<RoleConsumer>
		{userData => (
			<RedirectFilter
				routeProps={props}
				redirect="/"
				condition={!userData.isAuth}
			/>
		)}
	</RoleConsumer>
);

export default PublicRoute;
