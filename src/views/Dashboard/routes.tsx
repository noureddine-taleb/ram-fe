import React from "react";
import { Dashboard } from "./Dashboard";
import { InstructorRoutes } from "views/Instructor/routes";
import { InternRoutes } from "views/Intern/routes";
import { TrainingRoutes } from "views/Training/routes";
import { UserRoutes } from "views/User/routes";

export const DashboardRoutes = [
	{ path: '/', element: <Dashboard /> },
	{
		path: 'stagiaire',
		children: InternRoutes
	},
	{
		path: 'instructeur',
		children: InstructorRoutes
	},
	{
		path: 'formation',
		children: TrainingRoutes
	},
	{
		path: 'utilisateur',
		children: UserRoutes
	},
];