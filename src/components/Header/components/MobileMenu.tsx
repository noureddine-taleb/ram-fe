import { BurgerMenu } from "components/Icons/BurgerMenu";
import { IconLogout } from "components/Icons/IconLogout";
import { urlMatches } from "helpers/url";
import { navElems } from "mocks/data";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export function MobileMenu({ className }: { className: string }) {
	const list = useRef<HTMLDivElement>(null);
	const currentLoc = useLocation().pathname;

	return (
		<div className={`${className} absolute flex flex-col w-full sm:w-[300px] z-10`}>
			<div onClick={() => list.current?.classList.toggle("hidden")}>
				<BurgerMenu className="w-8 h-8 ml-3" />
			</div>
			<div ref={list} className="hidden mt-[38px] w-full h-full items-center flex-col bg-[#FFFCFC] transition">
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
			</div>
		</div>
	);
}