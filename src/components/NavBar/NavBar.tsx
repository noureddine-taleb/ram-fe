import { Link, useLocation } from "react-router-dom";
import { IconLogout } from "components/Icons/IconLogout";
import { urlMatches } from "helpers/url";
import { navElems } from "mocks/data";

export function NavBar() {
	const currentLoc = useLocation().pathname;

	return (
		<div className="w-1/5 h-full items-center flex-col bg-[#FFFCFC] hidden lg:flex">
			<Link to="/">
				<img src="/ram.png" alt="ram" className="w-32 h-20 my-5" />
			</Link>
			<ul className="w-full">
				{
					navElems.map((el, i) =>
						<li key={i} className={`${urlMatches(el.link, currentLoc) ? "text-[#c20831]" : "text-gray-400"} relative my-5 flex justify-center items-center`}>
							<Link to={el.link} className="flex gap-5">
								<el.icon className="h-5 w-5" />
								{el.label}
							</Link>
							{
								urlMatches(el.link, currentLoc) && <div className="bg-[#c20831] w-[5px] absolute h-full left-full -translate-x-full"></div>
							}
						</li>
					)
				}
			</ul>
			<button className="w-[170px] h-[40px] mt-auto mb-10 bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white rounded flex items-center justify-around"><IconLogout className="text-gray w-[19px] h-[22px]" />Se Deconnecter</button>
		</div>
	)
}