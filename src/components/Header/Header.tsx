import { SearchBar } from "components/Header/SearchBar";
import { ProfileImg } from "components/Header/ProfileImg";
import { useLocation } from "react-router";
import { IconBell } from "components/Icons/IconBell";
import { getHeader } from "helpers/url";

export function Header() {
	const currentLoc = useLocation().pathname;
	return (
		<div className="bg-red w-4/5 h-[15%] bg-gradient-to-r from-[#f0405c] to-[#c20831] 
					text-white flex pt-5">
			<div className="ml-4 font-sans text-lg">{getHeader(currentLoc)}</div>
			<div className="ml-auto flex items-center gap-8 mr-4">
				<SearchBar />
				<IconBell className="mt-1 w-6 h-7" notificationAvailable={true}></IconBell>
				<span>|</span>
				<ProfileImg />
			</div>
		</div>
	);
}