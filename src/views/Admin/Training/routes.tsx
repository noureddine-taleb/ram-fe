import { Cours } from "./Cours";
import { CoursEval } from "./CoursEval";
import { CoursPlan } from "./CoursPlan";
import { NewTraining } from "./NewTraining";
import { Trainings } from "./Trainings";

export const TrainingRoutes = [
	{ path: "/", element: <Trainings /> },
	{ path: "/cours", element: <Cours /> },
	{ path: "/cours/planification-cours", element: <CoursPlan /> },
	{ path: "/cours/notation", element: <CoursEval /> },
	{ path: "ajouter-formation", element: <NewTraining /> }
];