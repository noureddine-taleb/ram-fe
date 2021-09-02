import { IconInstructor } from "components/Icons/IconInstructor";
import { IconStudent } from "components/Icons/IconStudent";
import { Card } from "./components/Card";

export function Main() {
	return (
		<div className="w-screen h-screen bg-[#E5E5E5] flex flex-col justify-center items-center gap-y-20">
			<img className="" src="/ram.png" />
			<div className="flex justify-center items-center gap-x-10">
				<Card url="/dashboard" title="ADMIN" scheme={{ bg: "bg-[#F6F5FF]", text: "text-[#3734A9]" }}>
					<IconStudent className="" />
				</Card>
				<Card url="/dashboard" title="INSTRUCTOR" scheme={{ bg: "bg-[#F5FFFC]", text: "text-[#2FE6C8]" }}>
					<IconInstructor className="" />
				</Card>
			</div>


		</div>
	)
}