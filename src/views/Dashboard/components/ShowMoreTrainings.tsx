import React from "react";
import { IconArrow } from "components/Icons/IconArrow";

export function ShowMoreTrainings() {
	return (
		<div className="w-28 h-44 flex flex-col bg-[#FCEFEF] rounded-lg justify-center items-center text-lg font-medium">
			<IconArrow className="h-4 text-[#C40B33] text-xl"></IconArrow>
			<span>Voir Plus</span>
		</div>
	);
}