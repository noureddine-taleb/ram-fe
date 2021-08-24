import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { DashboardLayout } from './layouts/dashboard';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Instructors } from './views/Instructor/Instructors';
import { NewInstructor } from './views/Instructor/NewInstructor';
import { Interns } from './views/Intern/Interns';
import { NewIntern } from './views/Intern/NewIntern';
import { NewTraining } from './views/Training/NewTraining';
import { Trainings } from './views/Training/Trainings';
import { NewUser } from './views/User/NewUser';
import { Users } from './views/User/Users';

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
			children: [
			  	{ path: '/', element: <Dashboard /> },
			  	{
					path: 'stagiaire',
					children: [
						{ path: "/", element: <Interns /> },
						{ path: "ajouter-stagiaire", element: <NewIntern /> }
					]
				},
			  	{
					path: 'instructeur',
					children: [
						{ path: "/", element: <Instructors /> },
						{ path: "ajouter-instructeur", element: <NewInstructor /> }
					]
				},
			  	{
					path: 'formation',
					children: [
						{ path: "/", element: <Trainings /> },
						{ path: "ajouter-formation", element: <NewTraining /> }
					]
				},
			  	{
					path: 'utilisateur',
					children: [
						{ path: "/", element: <Users /> },
						{ path: "ajouter-utilisateur", element: <NewUser /> }
					]
				},
			]
		},
	])
}