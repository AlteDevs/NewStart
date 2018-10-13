import React, { Component } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import cookies from 'utils/cookies';
import {
	Badge,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
	AppAsideToggler,
	AppHeaderDropdown,
	AppNavbarBrand,
	AppSidebarToggler
} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';
import logoMini from '../../assets/img/brand/logo-mini.svg';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {
		// eslint-disable-next-line
		const { children, history, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
					full={{ src: logo, width: 89, height: 25, alt: 'Новое начало' }}
					minimized={{
						src: logoMini,
						width: 30,
						height: 30,
						alt: 'Новое начало'
					}}
				/>
				<AppSidebarToggler className="d-md-down-none" display="lg" />
				<Nav className="d-md-down-none" navbar>
					<NavItem className="px-3">
						<RouterLink to="/">Рабочая панель</RouterLink>
					</NavItem>
					<NavItem className="px-3">
						<RouterLink to="/jobs">Вакансии</RouterLink>
					</NavItem>
					<NavItem className="px-3">
						<RouterLink to="/settings">Настройки</RouterLink>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<NavLink href="#">
							<i className="icon-bell" />
							{/*<Badge pill color="danger">*/}
							{/*5*/}
							{/*</Badge>*/}
						</NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink href="#">
							<i className="icon-list" />
						</NavLink>
					</NavItem>
					<AppHeaderDropdown direction="down">
						<DropdownToggle nav>
							<img
								src={'assets/img/avatars/user.jpg'}
								className="img-avatar"
								alt="admin@bootstrapmaster.com"
							/>
						</DropdownToggle>
						<DropdownMenu right style={{ right: 'auto' }}>
							{/* <DropdownItem header tag="div" className="text-center">
								<strong>Профиль</strong>
							</DropdownItem> */}
							<RouterLink to="/user-profile">
								<DropdownItem>
									<i className="fa fa-user" /> Профиль
								</DropdownItem>
							</RouterLink>
							{/* <DropdownItem>
								<i className="fa fa-bell-o" /> Уведомления
								<Badge color="info">4</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-envelope-o" /> Сообщения
								<Badge color="success">1</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-tasks" /> Ваши отклики
								<Badge color="danger">2</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-usd" /> Платежи
								{/*<Badge color="secondary"></Badge>*/}
							<DropdownItem
								onClick={() => {
									cookies.remove('TOKEN');
									window.location.reload();
								}}
							>
								<i className="fa fa-lock" /> Выйти
							</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
				</Nav>
				<AppAsideToggler defaultOpen={true} className="d-md-down-none" />
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
