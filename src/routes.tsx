import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';
import { Instructors } from './Instructor/Instructors';
import { NewInstructor } from './Instructor/NewInstructor';
import { Interns } from './Intern/Interns';
import { NewIntern } from './Intern/NewIntern';
import { DashboardLayout } from './layouts/dashboard';
import { NewTraining } from './Training/NewTraining';
import { Trainings } from './Training/Trainings';
import { NewUser } from './User/NewUser';
import { Users } from './User/Users';

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