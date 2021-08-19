import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "./SectionTitle";
import { ShowMoreActivities } from "./ShowMoreActivities";
import { ShowMoreTrainings } from "./ShowMoreTrainings";
import { StatCard } from "./StatCard";
import { Table } from "./Table";
import { TrainingCard, Training } from "./TrainingCard";

export function Dashboard()
{
	const trainings: Training[] = [
		{ title: "Formation 01", location: "Casablanca", time: "6h" },
		{ title: "Formation 02", location: "Rabat", time: "4h" },
		{ title: "Formation 03", location: "Tanger", time: "7h" },
		{ title: "Formation 04", location: "Casablanca", time: "9h" },
		{ title: "Formation 05", location: "Agadir", time: "2h" },
	]

	const table = { 
			head: ["Nom & Prenom", "Fonction", "Matricule"], data: [
			["lorem ipsum", "lorem ipsum", "lorem ipsum"],
			["lorem ipsum", "lorem ipsum", "lorem ipsum"]
		] };

	return (
		<div className="relative px-7">
			<div className="flex justify-between relative top-[-30px]">
				<StatCard title="Stagiaire" icon={<FontAwesomeIcon icon="user-graduate"/>}
						count={92} scheme={{ bg: "bg-purple-500 bg-opacity-[10%]", text: "text-purple-800" }}></StatCard>
				<StatCard title="Instructeur" icon={<FontAwesomeIcon icon="chalkboard-teacher"/>}
						count={23} scheme={{ bg: "bg-green-500 bg-opacity-[10%]", text: "text-green-400" }}></StatCard>
				<StatCard title="Formation" icon={<FontAwesomeIcon icon="tablet"/>}
						count={33} scheme={{ bg: "bg-yellow-500 bg-opacity-[10%]", text: "text-yellow-400" }}></StatCard>
			</div>
			
			<SectionTitle title="Derniers Formations"/>
			<div className="flex justify-between">
				{
					trainings.map(tr => <TrainingCard {...tr}></TrainingCard>)
				}
				<ShowMoreTrainings/>
			</div>

			<div className="flex justify-between">
				<div className="w-[49%]">
					<div className="flex justify-between">
						<SectionTitle title="Derniers Stagiaires créés"/>
						<ShowMoreActivities/>
					</div>
					<Table { ...table }/>
				</div>
				<div className="w-[49%]">
					<div className="flex justify-between">
						<SectionTitle title="Derniers Instructeurs créés"/>
						<ShowMoreActivities/>
					</div>
					<Table { ...table }/>
				</div>
			</div>
		</div>
	)
}