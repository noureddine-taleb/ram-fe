import React from "react";
import { IconArrow } from "../../../components/Icons/IconArrow";

export function ShowMoreActivities()
{
	return (
		<div className="text-[#B23939] flex items-center justify-center font-bold">
			<h2>
				More Activity 
			</h2>
			<IconArrow className="ml-1.5 text-[#B23939] h-3"></IconArrow>
		</div>
	);
}