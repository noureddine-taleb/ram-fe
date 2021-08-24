import { NewTraining } from "./NewTraining";
import { Trainings } from "./Trainings";

export const TrainingRoutes = [
	{ path: "/", element: <Trainings /> },
	{ path: "ajouter-formation", element: <NewTraining /> }
];