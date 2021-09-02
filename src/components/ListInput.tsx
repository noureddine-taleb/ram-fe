import React from "react";
import { IconDropDown } from "components/Icons/IconDropDown";

export function ListInput({ name, id, label, placeholder, className, data }: { name: string, id: string, label: string, placeholder: string, className?: string, data: { value: string, label: string }[] }) {
	return (
		<div className={`flex flex-col ${className}`}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor={name}>{label}</label>
			<div className="relative">
				<div className="absolute text-black w-[12px] h-[7px] top-1/2 left-full translate-x-[-150%] -translate-y-1/2 pointer-events-none">
					<IconDropDown className=""></IconDropDown>
				</div>
				<select className="pl-2 w-full bg-white hover:outline-none shadow-md rounded appearance-none h-8 text-xs" id={id} name={name} placeholder={placeholder}>
					{
						data.map((option, i) => (
							<option key={i} value={option.value}>{option.label}</option>
						)
						)
					}
				</select>
			</div>
		</div>
	);
}