import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchBar()
{
	return (
		<div className="relative">
			<div className="absolute top-2 left-4">
				<FontAwesomeIcon className="text-gray" icon="search" />
			</div>
			<input className="h-[40px] bg-transparent rounded-[20px]  appearance-none border
			focus:outline-none pl-10 placeholder-current" type="text" placeholder="Rechercher" name="" id=""/>
		</div>
		
	);
}