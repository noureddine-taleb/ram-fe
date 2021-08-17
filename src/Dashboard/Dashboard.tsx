import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatCard } from "./StatCard";

export function Dashboard()
{
	return (
		<div className="relative">
			<div className="flex justify-around relative top-[-30px]">
				<StatCard title="Stagiaire" icon={<FontAwesomeIcon icon="user-graduate"/>}
						count={92} scheme={{ bg: "bg-purple-500 bg-opacity-[10%]", text: "text-purple-800" }}></StatCard>
				<StatCard title="Instructeur" icon={<FontAwesomeIcon icon="chalkboard-teacher"/>}
						count={23} scheme={{ bg: "bg-green-500 bg-opacity-[10%]", text: "text-green-400" }}></StatCard>
				<StatCard title="Formation" icon={<FontAwesomeIcon icon="tablet"/>}
						count={33} scheme={{ bg: "bg-yellow-500 bg-opacity-[10%]", text: "text-yellow-400" }}></StatCard>
			</div>
		</div>
	)
}