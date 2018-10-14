import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import ReactBotUI from '../../containers/Bot';

import {
	AppAside,
	AppBreadcrumb,
	AppHeader,
	AppSidebar,
	AppSidebarNav
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import routes from '../../routes';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
	render() {
		return (
			<div className="app">
				<AppHeader fixed>
					<DefaultHeader />
				</AppHeader>
				<div className="app-body">
					<AppSidebar fixed display="lg">
						<AppSidebarNav navConfig={navigation} {...this.props} />
					</AppSidebar>
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
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Container>
					</main>
					<AppAside fixed isOpen={true}>
						<div className="bot-container">
							<ReactBotUI
								dialogflow={null}
								dialogHeightMax={700}
								isUserHidden={true}
								isVisible={true}
								title="Бот"
							/>
						</div>
					</AppAside>
				</div>
			</div>
		);
	}
}

export default DefaultLayout;
