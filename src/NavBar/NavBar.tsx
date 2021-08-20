import { Link, useLocation } from "react-router-dom";
import { IconElearn } from "../Icons/IconElearn";
import { IconHome } from "../Icons/IconHome";
import { IconLogout } from "../Icons/IconLogout";
import { IconInstructor } from "../Icons/IconInstructor";
import { IconStudent } from "../Icons/IconStudent";
import { IconUsers } from "../Icons/IconUsers";
import { IconSearch } from "../Icons/IconSearch";

export function NavBar()
{
	const navElems: {icon: any, label: string, link: string}[] = [
		{ icon: IconHome, label: "Dashboard", link: "/dashboard" },
		{ icon: IconStudent, label: "Stagiaire", link: "/dashboard/stagiaire" },
		{ icon: IconElearn, label: "Formation", link: "/dashboard/formation" },
		{ icon: IconInstructor, label: "Instructeur", link: "/dashboard/instructeur" },
		{ icon: IconUsers, label: "Utilisateur", link: "/dashboard/utilisateur" },
	];
	const currentLoc = useLocation().pathname;

	return (
		<div className="w-1/5 h-full flex items-center flex-col bg-[#FFFCFC]">
			<img src="/ram.png" alt="ram" className="w-32 h-20 my-5"/>
				<ul className="w-full">
						{
							navElems.map((el, i) => 
								<li key={i} className={currentLoc === el.link ? "my-5 flex text-[#c20831]": "my-5 flex text-gray-400"}>
									<Link to={el.link} className="flex">
										<el.icon className="h-5 w-5 ml-28 mr-5"/>
										{el.label}
									</Link>
									{
										currentLoc === el.link && <div className="bg-[#c20831] w-[5px] ml-auto"></div>
									}
								</li>
							)
						}
				</ul>
			<button className="w-[170px] h-[40px] mt-auto mb-10 bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white rounded flex items-center justify-around"><IconLogout className="text-gray w-[19px] h-[22px]"/>Se Deconnecter</button>
		</div>
	)
}