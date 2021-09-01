import { Navigate, useRoutes } from 'react-router-dom';
import { DashboardLayout } from 'layouts/DashboardLayout';
import { DashboardRoutes } from 'views/Dashboard/routes';
import { Main } from 'views/Main/Main';

export function Routes()
{
	return useRoutes([
		{
			path: "/",
			element: <Main></Main>
		},
		{
			path: '/dashboard',
			element: <DashboardLayout/>,
			children: DashboardRoutes
		},
	])
}