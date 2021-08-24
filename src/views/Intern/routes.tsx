import { NewIntern } from "./NewIntern";
import { Interns } from "./Interns";

export const InternRoutes = [
	{ path: "/", element: <Interns /> },
	{ path: "ajouter-stagiaire", element: <NewIntern /> }
];