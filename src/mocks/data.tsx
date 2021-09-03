import { IconElearn } from "components/Icons/IconElearn";
import { IconHistory } from "components/Icons/IconHistory";
import { IconHome } from "components/Icons/IconHome";
import { IconInstructor } from "components/Icons/IconInstructor";
import { IconProfileSettings } from "components/Icons/IconProfileSettings";
import { IconStudent } from "components/Icons/IconStudent";
import { IconUsers } from "components/Icons/IconUsers";
import { NavElement } from "interfaces/NavElement";

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

export const dataList = [
	{ value: "lorem", label: "lorem" },
	{ value: "lorem2", label: "lorem2" },
	{ value: "lorem3", label: "lorem3" },
	{ value: "lorem4", label: "lorem4" },
];

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