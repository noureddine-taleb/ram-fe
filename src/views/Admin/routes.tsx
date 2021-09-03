import React from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { InstructorRoutes } from "views/Admin/Instructor/routes";
import { InternRoutes } from "views/Admin/Intern/routes";
import { TrainingRoutes } from "views/Admin/Training/routes";
import { UserRoutes } from "views/Admin/User/routes";

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