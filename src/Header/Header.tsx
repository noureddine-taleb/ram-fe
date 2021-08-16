import {SearchBar} from "./SearchBar";
import {ProfileImg} from "./ProfileImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

function getHeader(path: string)
{
	const pathParts = path.split('/')
	.filter(s => s)
	.map(s => <>{s[0].toUpperCase() + s.slice(1).toLowerCase()}</>)

	pathParts[pathParts.length - 1] = <b>{pathParts[pathParts.length - 1]}</b>
	return pathParts.reduce((c, p) => [c, <>{' > '}</>, p] as any)
}

export function Header()
{
	const currentLoc = useLocation().pathname;
	return (
		<div className="bg-red w-4/5 h-[15%] bg-gradient-to-r from-[#f0405c] to-[#c20831] 
					text-white flex pt-5">
			<div className="ml-4 font-sans text-lg">{getHeader(currentLoc)}</div>
			<div className="ml-auto flex items-center gap-8 mr-4">
				<SearchBar/>
				<FontAwesomeIcon className="mt-1" icon="bell"/>
				<span>|</span>
				<ProfileImg/>
			</div>
		</div>
		);
}