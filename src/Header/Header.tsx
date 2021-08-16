import {SearchBar} from "./SearchBar";
import {ProfileImg} from "./ProfileImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header()
{
	return (
		<div className="bg-red w-4/5 h-[15%] bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white flex
		pt-5
		">
			<div className="ml-4">Dashboard</div>
			<div className="ml-auto flex items-center gap-8 mr-4">
				<SearchBar/>
				<FontAwesomeIcon className="mt-1" icon="bell"/>
				<span>|</span>
				<ProfileImg/>
			</div>
		</div>
		);
}