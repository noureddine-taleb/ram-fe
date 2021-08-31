import { useState } from "react";
import "./CheckBox.css"

export function CheckBox({label, className}: {label: string, className: string})
{
	const [checked, setChecked] = useState(false);

	return (
		<div className={className}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor="test">{label}</label>
			<div className="relative flex cursor-pointer w-40 h-9" onClick={() => setChecked(!checked)}>
				<input checked={checked} onChange={() => setChecked(!checked)} className="hidden" type="checkbox" id="test"/>
				<div className="bar transition duration-300 w-full rounded-full bg-gray-500 shadow-md flex justify-center items-center text-white font-bold">
					<span>Non</span>
				</div>
				<div className="dot absolute transition duration-300 w-11 h-11 -top-1 rounded-full bg-white shadow-md">
				</div>
			</div>
		</div>
	);
}
