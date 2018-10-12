import React from 'react';
import { Redirect } from 'react-router-dom';
import { RoleConsumer } from './RoleProvider';

const DefaultRoute = () => (
	<RoleConsumer>
		{userData => {
			if (userData.isAuth) {
				switch (userData.user.mainRole.name) {
					case 'Teacher': {
						return <Redirect to="/teacher/group-list" />;
					}
					case 'Student': {
						return <Redirect to="/student/test-list" />;
					}
					case 'Admin': {
						return <Redirect to="/admin/tools" />;
					}
					default: {
						return <Redirect to="/login" />;
					}
				}
			}

			return <Redirect to="/login" />;
		}}
	</RoleConsumer>
);

export default DefaultRoute;
