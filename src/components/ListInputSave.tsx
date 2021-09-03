import React, { useRef, useState } from "react";
import { IconDropDown } from "components/Icons/IconDropDown";

export function ListInputSave({ name, id, label, placeholder, className, data }: { name: string, id: string, label: string, placeholder: string, className?: string, data: { value: string, label: string }[] }) {
	const [list, setList] = useState<string[]>(["test", "test1", "test2", "test3"]);
	const inputRef = useRef<HTMLSelectElement>(null);

	return (
		<div className={`flex flex-col max-w-full ${className}`}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor={name}>{label}</label>
			<div className="relative">
				<div className="absolute text-black w-[12px] h-[7px] top-1/2 left-full translate-x-[-150%] -translate-y-1/2 pointer-events-none">
					<IconDropDown></IconDropDown>
				</div>

				<select ref={inputRef} onChange={_ => {
					if (inputRef.current?.value && !list.includes(inputRef.current?.value)) {
						list.push(inputRef.current?.value)
						setList(list.slice(0));
					}
				}} className="pl-2 w-full bg-white hover:outline-none shadow-md rounded appearance-none h-8 text-xs" id={id} name={name} placeholder={placeholder}>
					{
						data.map((option, i) => (
							<option key={i} value={option.value}>{option.label}</option>
						)
						)
					}
				</select>
			</div>
			<div className="flex flex-wrap gap-1 pt-1">
				{
					list.map((el, i) =>
						<div key={i} className="flex font-semibold gap-2 bg-[#797979] w-[fit-content] h-[fit-content] rounded-full px-3 text-white">
							{el}
							<button onClick={() => {
								setList(list.filter(v => v !== el));
							}}>x</button>
						</div>
					)
				}
			</div>
		</div>
	);
}