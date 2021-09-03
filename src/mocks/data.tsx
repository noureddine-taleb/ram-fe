import { IconElearn } from "components/Icons/IconElearn";
import { IconHistory } from "components/Icons/IconHistory";
import { IconHome } from "components/Icons/IconHome";
import { IconInstructor } from "components/Icons/IconInstructor";
import { IconProfileSettings } from "components/Icons/IconProfileSettings";
import { IconStudent } from "components/Icons/IconStudent";
import { IconUsers } from "components/Icons/IconUsers";
import { NavElement } from "interfaces/NavElement";

export const navAdminElems: NavElement[] = [
	{ icon: IconHome, label: "Dashboard", link: "/dashboard" },
	{ icon: IconStudent, label: "Stagiaire", link: "/dashboard/stagiaire" },
	{ icon: IconElearn, label: "Formation", link: "/dashboard/formation" },
	{ icon: IconInstructor, label: "Instructeur", link: "/dashboard/instructeur" },
	{ icon: IconUsers, label: "Utilisateur", link: "/dashboard/utilisateur" },
];

export const navInstructorElems: NavElement[] = [
	{ icon: IconElearn, label: "Formations", link: "/instructor/formations" },
	{ icon: IconHistory, label: "Historiques", link: "/instructor/historiques" },
	{ icon: IconProfileSettings, label: "Profil", link: "/instructor/profil" },
];

export const lastTrainings = [
	{ title: "Formation 01", location: "Casablanca", time: "6h" },
	{ title: "Formation 02", location: "Rabat", time: "4h" },
	{ title: "Formation 03", location: "Tanger", time: "7h" },
	{ title: "Formation 04", location: "Casablanca", time: "9h" },
	{ title: "Formation 05", location: "Agadir", time: "2h" },
]

export const lastCreatedInterns = {
	head: ["Nom & Prenom", "Fonction", "Matricule"], data: [
		["lorem ipsum", "lorem ipsum", "lorem ipsum"],
		["lorem ipsum", "lorem ipsum", "lorem ipsum"]
	]
};

export const dataList = [
	{ value: "lorem", label: "lorem" },
	{ value: "lorem2", label: "lorem2" },
	{ value: "lorem3", label: "lorem3" },
	{ value: "lorem4", label: "lorem4" },
];

export const dummyTable = {
	head: [
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};

// Dashboard Tables

export const trainingsTable = {
	head: [
		"Titre",
		"Validité",
		"Type",
		"Tolérence",
		"Test",
		"Action",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};

export const coursTable = {
	head: [
		"Formation",
		"Date",
		"Instructeur",
		"Durée",
		"Lieu",
		"Tolèrence",
		"Date Contrôle",
		"Examinateur",
		"Action",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};

export const userTable = {
	head: [
		"Matricule",
		"Nom",
		"Prenom",
		"Fonction",
		"Date d’entrée Compagnie",
		"Passport",
		"Validité de Passeport",
		"Roles",
		"Action",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};

export const internTable = {
	head: [
		"Matricule",
		"Nom",
		"Prenom",
		"Fonction",
		"Passport",
		"Date Lâcher",
		"Validité de Passeport",
		"Action",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};

export const instructorTable = internTable;

export const internEmbedTable = {
	head: [
		"Matricule",
		"Nom",
		"Prenom",
	],
	data: [
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem"],
	]
};

// Instructor Dashboard Tables

export const instructorTrainingsTable = {
	head: [
		"Titre",
		"Validité",
		"Tolèrance",
		"Date",
		"Durée",
		"Examinateur",
		"Stagiaires",
		"Pièce Jointe",
	],
	data: [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
	]
};