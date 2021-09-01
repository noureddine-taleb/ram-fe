import React from "react";
import { Link } from "react-router-dom";
import { IconPlus } from "./Icons/IconPlus";

export function AddNew({label, link}: {label: string, link: string}) {
	return (
		<Link to={link}>
			<button className="bg-[#2AD4B9] flex rounded-lg w-72 h-11 items-center justify-center px-3 text-white font-bold text-base">
				<IconPlus className="w-7 h-7 mr-9" />
				{label}
			</button>
		</Link>
	)
}