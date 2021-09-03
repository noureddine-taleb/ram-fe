import { Navigate } from "react-router";
import { History } from "./History/History";
import { Profil } from "./Profil/Profil";
import { Trainings } from "./Training/Trainings";

export const InstructorRoutes = [
	{
		path: '/',
		element: <Navigate to="profil" />
	},
	{
		path: '/formations',
		element: <Trainings />
	},
	{
		path: '/historiques',
		element: <History />
	},
	{
		path: '/profil',
		element: <Profil />
	}
];