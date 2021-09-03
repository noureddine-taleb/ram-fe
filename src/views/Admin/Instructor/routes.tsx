import { NewInstructor } from "./NewInstructor";
import { Instructors } from "./Instructors";

export const InstructorRoutes = [
	{ path: "/", element: <Instructors /> },
	{ path: "ajouter-instructeur", element: <NewInstructor /> }
];