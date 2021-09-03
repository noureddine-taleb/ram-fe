import { IconBurgerMenu } from "components/Icons/IconBurgerMenu";
import { urlMatches } from "helpers/url";
import { NavElement } from "interfaces/NavElement";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const toggleMenuHandler = (menu: React.RefObject<HTMLDivElement>) => {
	return () => menu.current?.classList.toggle("hidden")
}

export function MobileMenu({ className, list }: { className: string, list: NavElement[] }) {
	const menu = useRef<HTMLDivElement>(null);
	const currentLoc = useLocation().pathname;

	return (
		<div className={`${className} absolute flex flex-col w-full z-10`}>
			<div onClick={toggleMenuHandler(menu)}>
				<IconBurgerMenu className="w-8 h-8 ml-3" />
			</div>
			<div ref={menu} className="hidden mt-[20px] w-full h-full items-center flex-col bg-[#FFFCFC] transition">
				<ul className="w-full">
					{
						list.map((el, i) =>
							<li key={i} onClick={toggleMenuHandler(menu)} className={`${urlMatches(el.link, currentLoc) ? "text-[#c20831]" : "text-gray-400"} relative my-5 flex justify-center items-center`}>
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
			</div>
		</div>
	);
}