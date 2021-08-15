import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar()
{
	const navElems: {icon: IconProp, label: string}[] = [
		{ icon: "home", label: "Dashboard" },
		{ icon: "user-graduate", label: "Stagiaire" },
		{ icon: "tablet", label: "Formation" },
		{ icon: "chalkboard-teacher", label: "Instructeur" },
		{ icon: "users", label: "Utilisateur" },
	];
	return (
		<div className="w-1/5 h-full flex items-center flex-col bg-red bg-opacity-[.01]">
			<img src="ram.png" alt="ram" className="w-1/3 h-20 mb-5"/>
			<ul className="w-full">
				{
					navElems.map(el => 
						<li className="my-5 flex">
							<FontAwesomeIcon className="h-5 w-5 ml-28 mr-5 text-gray" icon={el.icon} />
							{el.label}
						</li>
					)
				}
			</ul>
			<button className="w-[150px] h-[40px] mt-auto mb-10 bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white rounded"><FontAwesomeIcon className="text-gray mr-[5px]" icon="sign-out-alt" />Se Deconnecter</button>
		</div>
	)
}