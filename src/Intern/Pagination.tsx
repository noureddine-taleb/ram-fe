import { IconNext } from "../Icons/IconNext";
import { IconPrev } from "../Icons/IconPrev";

export function Pagination() {
	return (
		<div className="flex gap-1 mt-2">
			<div className="text-[#C20831] border border-[#C20831] rounded-lg w-[fit-content] h-9 flex items-center justify-center px-1">
				<IconPrev className="w-4 h-4 text-[#C20831]"/>
				Précédent
			</div>
			<div className="text-white border border-[#C20831] bg-[#C20831] rounded-lg w-9 h-9 flex items-center justify-center">1</div>
			<div className="text-[#C20831] border-[#C20831] border bg-white rounded-lg w-9 h-9 flex items-center justify-center">2</div>
			<div className="text-[#C20831] border-[#C20831] border bg-white rounded-lg w-9 h-9 flex items-center justify-center">3</div>
			<div className="text-[#C20831] border border-[#C20831] rounded-lg w-[fit-content] h-9 flex items-center justify-center px-1">
				Prochain
				<IconNext className="w-4 h-4 text-[#C20831]"/>
			</div>
		</div>
	);
}