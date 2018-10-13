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

const Jobs = Loadable({
	loader: () => import('./views/Pages/Jobs/Jobs'),
	loading: Loading
});

const Job = Loadable({
	loader: () => import('./views/Pages/Jobs/Job'),
	loading: Loading
});

const UserTest = Loadable({
	loader: () => import('./views/Pages/UserTest'),
	loading: Loading
});

const Courses = Loadable({
	loader: () => import('./views/Pages/Courses'),
	loading: Loading
});

const AddCourse = Loadable({
	loader: () => import('./views/Pages/AddCourse'),
	loading: Loading
});

const CoursesDetail = Loadable({
	loader: () => import('./views/Pages/Courses/Detail'),
	loading: Loading
});

const UserProfile = Loadable({
	loader: () => import('./views/Pages/UserProfile'),
	loading: Loading
});

const routes = [
	{ path: '/', exact: true, name: 'Главная', component: DefaultLayout },
	{ path: '/dashboard', name: 'Рабочая панель', component: Dashboard },
	{ path: '/charts', name: 'Статистика', component: Charts },
	{ path: '/jobs', exact: true, name: 'Вакансии', component: Jobs },
	{
		path: '/jobs/:id',
		exact: true,
		name: 'Детальная вакансии',
		component: Job
	},
	{
		path: '/user-test/:testId',
		exact: true,
		name: 'Тесты пользователя',
		component: UserTest
	},
	{
		path: '/courses',
		exact: true,
		name: 'Курсы',
		component: Courses
	},
	{
		path: '/courses/create',
		exact: true,
		name: 'Создание курса',
		component: AddCourse
	},
	{
		path: '/courses/:courseId',
		exact: true,
		name: 'Курс', //Сделать динамическое название курсов в breadcrumbs
		component: CoursesDetail
	},
	{
		path: '/user-profile',
		exact: true,
		name: 'Профиль пользователя', //Сделать динамическое название курсов в breadcrumbs
		component: UserProfile
	}
];

export default routes;
