import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ShowMoreTrainings()
{
	return (
			<div className="w-28 h-44 flex flex-col bg-[#FCEFEF] rounded-lg justify-center items-center text-lg font-medium">
				<FontAwesomeIcon icon="arrow-right" className="text-[#C40B33] text-xl"></FontAwesomeIcon>
				<span>Voir Plus</span>
			</div>
	);
}