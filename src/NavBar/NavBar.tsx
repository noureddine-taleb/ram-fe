import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export function NavBar()
{
	const navElems: {icon: IconProp, label: string, link: string}[] = [
		{ icon: "home", label: "Dashboard", link: "/dashboard" },
		{ icon: "user-graduate", label: "Stagiaire", link: "/dashboard/stagiaire" },
		{ icon: "tablet", label: "Formation", link: "/dashboard/formation" },
		{ icon: "chalkboard-teacher", label: "Instructeur", link: "/dashboard/instructeur" },
		{ icon: "users", label: "Utilisateur", link: "/dashboard/utilisateur" },
	];
	const currentLoc = useLocation().pathname;

	return (
		<div className="w-1/5 h-full flex items-center flex-col bg-red bg-opacity-[.01]">
			<img src="/ram.png" alt="ram" className="w-1/3 h-20 my-5"/>
				<ul className="w-full">
					{/* <Router> */}
						{
							navElems.map((el, i) => 
								<li key={i} className={currentLoc == el.link ? "my-5 flex text-[#c20831]": "my-5 flex text-gray-400"}>
									<Link to={el.link}>
										<FontAwesomeIcon className="h-5 w-5 ml-28 mr-5" icon={el.icon} />
										{el.label}
									</Link>
									{
										currentLoc == el.link && <div className="bg-[#c20831] w-[5px] ml-auto"></div>
									}
								</li>
							)
						}
					{/* </Router> */}
				</ul>
			<button className="w-[150px] h-[40px] mt-auto mb-10 bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white rounded"><FontAwesomeIcon className="text-gray mr-[5px]" icon="sign-out-alt" />Se Deconnecter</button>
		</div>
	)
}