import {SearchBar} from "./SearchBar";
import {ProfileImg} from "./ProfileImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

function getHeader(path: string)
{
	// capitalise words + separator
	const pathParts: any = path.split('/')
	.filter(s => s)
	.map((s: string, i: number, arr) => <span key={i}>{s[0].toUpperCase() + s.slice(1).toLowerCase() + (i === (arr.length-1) ? '': ' > ')}</span>)

	// make last word bold
	pathParts[pathParts.length - 1] = <b key={pathParts.length - 1}>{pathParts[pathParts.length - 1]}</b>
	return pathParts;
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