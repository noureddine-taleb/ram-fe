import { NewUser } from "./NewUser";
import { Users } from "./Users";

export const UserRoutes = [
	{ path: "/", element: <Users /> },
	{ path: "ajouter-utilisateur", element: <NewUser /> }
];