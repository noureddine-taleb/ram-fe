import React from "react";
import { Dashboard } from "./Dashboard";
import { InstructorRoutes } from "../Instructor/routes";
import { InternRoutes } from "../Intern/routes";
import { TrainingRoutes } from "../Training/routes";
import { UserRoutes } from "../User/routes";

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