import {BeakerIcon} from "@heroicons/react/outline";

type NavElemProps = {icon: any, label: string};

export function NavBar()
{
	const navElems: NavElemProps[] = [
		{ icon: BeakerIcon, label: "Dashboard" },
		{ icon: BeakerIcon, label: "Stagiaire" },
		{ icon: BeakerIcon, label: "Formation" },
		{ icon: BeakerIcon, label: "Instructeur" },
		{ icon: BeakerIcon, label: "Utilisateur" },
	];
	return (
		<div className="w-1/5 h-full flex items-center flex-col">
			<img src="ram.png" alt="ram" className="w-1/3 h-20 mb-5"/>
			<ul className="w-full">
				{
					navElems.map(el => 
						<li className="my-5 flex">
							<el.icon className="h-5 w-5 ml-28 mr-5 text-blue-500"/>
							{el.label}
						</li>
					)
				}
			</ul>
			<button className="w-100 h-50 mt-auto mb-10">Se Deconnecter</button>
		</div>
	)
}