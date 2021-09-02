import React from "react";
import { IconElearn } from "components/Icons/IconElearn";
import { IconInstructor } from "components/Icons/IconInstructor";
import { IconStudent } from "components/Icons/IconStudent";
import { lastCreatedInterns, lastTrainings } from "mocks/data";
import { SectionTitle } from "./components/SectionTitle";
import { ShowMoreActivities } from "./components/ShowMoreActivities";
import { ShowMoreTrainings } from "./components/ShowMoreTrainings";
import { StatCard } from "./components/StatCard";
import { Table } from "./components/Table";
import { TrainingCard } from "./components/TrainingCard";

export function Dashboard() {
	return (
		<div>
			<div className="flex justify-between">
				<StatCard url="/dashboard/stagiaire" title="Stagiaire" icon={<IconStudent />}
					count={92} scheme={{ bg: "bg-purple-500 bg-opacity-[10%]", text: "text-purple-800" }}></StatCard>
				<StatCard url="/dashboard/instructeur" title="Instructeur" icon={<IconInstructor />}
					count={23} scheme={{ bg: "bg-green-500 bg-opacity-[10%]", text: "text-green-400" }}></StatCard>
				<StatCard url="/dashboard/formation" title="Formation" icon={<IconElearn />}
					count={33} scheme={{ bg: "bg-yellow-500 bg-opacity-[10%]", text: "text-yellow-400" }}></StatCard>
			</div>

			<SectionTitle title="Derniers Formations" />
			<div className="flex justify-between">
				{
					lastTrainings.map((tr, i) => <TrainingCard key={i} {...tr}></TrainingCard>)
				}
				<ShowMoreTrainings />
			</div>

			<div className="flex justify-between">
				<div className="w-[49%]">
					<div className="flex justify-between">
						<SectionTitle title="Derniers Stagiaires créés" />
						<ShowMoreActivities />
					</div>
					<Table {...lastCreatedInterns} />
				</div>
				<div className="w-[49%]">
					<div className="flex justify-between">
						<SectionTitle title="Derniers Instructeurs créés" />
						<ShowMoreActivities />
					</div>
					<Table {...lastCreatedInterns} />
				</div>
			</div>
		</div>
	)
}