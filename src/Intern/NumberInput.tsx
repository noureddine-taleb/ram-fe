import React from "react";
import { IconDropDown } from "../Icons/IconDropDown";

export function NumberInput({name, id, label, placeholder, className}: {name: string, id: string, label: string, placeholder: string, className?: string}) {
	return (
		<div className={`flex flex-col ${className}`}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor={name}>{label}</label>
			{/*<div className="relative">*/}
				{/*<div className="absolute text-black w-[12px] h-[7px] top-1/2 left-full translate-x-[-150%] -translate-y-1/2 pointer-events-none">
					<div className="cursor-pointer" onClick={() => console.log(12)}>
						<IconDropDown className=""></IconDropDown>
					</div>
				</div>*/}
			<input className="pl-2 w-full placeholder-gray-400 hover:outline-none shadow-md rounded appearance-none h-8 text-xs" type="number" id={id} name={name} placeholder={placeholder} />
		</div>
	);
}