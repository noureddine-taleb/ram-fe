import React from "react";
import { IconNext } from "./Icons/IconNext";
import { IconPrev } from "./Icons/IconPrev";


export function Pagination() {
	return (
		<div className="flex gap-1 mt-2">
			<button className="text-[#C20831] border border-[#C20831] rounded-lg w-[fit-content] h-9 flex items-center justify-center px-1">
				<IconPrev className="w-4 h-4 text-[#C20831]"/>
				Précédent
			</button>
			<button className="text-white border border-[#C20831] bg-[#C20831] rounded-lg w-9 h-9 flex items-center justify-center">1</button>
			<button className="text-[#C20831] border-[#C20831] border bg-white rounded-lg w-9 h-9 flex items-center justify-center">2</button>
			<button className="text-[#C20831] border-[#C20831] border bg-white rounded-lg w-9 h-9 flex items-center justify-center">3</button>
			<button className="text-[#C20831] border border-[#C20831] rounded-lg w-[fit-content] h-9 flex items-center justify-center px-1">
				Prochain
				<IconNext className="w-4 h-4 text-[#C20831]"/>
			</button>
		</div>
	);
}