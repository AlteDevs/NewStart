import React from 'react';
import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
	return <div>Загрузка...</div>;
}

const Charts = Loadable({
	loader: () => import('./views/Charts'),
	loading: Loading
});

const Dashboard = Loadable({
	loader: () => import('./views/Dashboard'),
	loading: Loading
});

const Users = Loadable({
	loader: () => import('./views/Users/Users'),
	loading: Loading
});

const User = Loadable({
	loader: () => import('./views/Users/User'),
	loading: Loading
});

const UserTest = Loadable({
	loader: () => import('./views/UserTest'),
	loading: Loading
});

const routes = [
	{ path: '/', exact: true, name: 'Главная', component: DefaultLayout },
	{ path: '/dashboard', name: 'Рабочая панель', component: Dashboard },
	{ path: '/charts', name: 'Статистика', component: Charts },
	{ path: '/jobs', exact: true, name: 'Вакансии', component: Users },
	{
		path: '/jobs/:id',
		exact: true,
		name: 'Детальная вакансии',
		component: User
	},
	{
		path: '/user-test/:testId',
		exact: true,
		name: 'User Test',
		component: UserTest
	}
];

export default routes;
