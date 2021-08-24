import { Navigate, useRoutes } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardRoutes } from './layouts/routes';

export function Routes()
{
	return useRoutes([
		{
			path: "/",
			element: <Navigate to="/dashboard" replace></Navigate>
		},
		{
			path: '/dashboard',
			element: <DashboardLayout/>,
			children: DashboardRoutes
		},
	])
}