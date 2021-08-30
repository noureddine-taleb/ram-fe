import { useRef, useState } from "react";
import "./CheckBox.css"

export function CheckBox({label, className}: {label: string, className: string})
{
	const [checked, setChecked] = useState(true);

	return (
		<div className={className}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor="test">{label}</label>
			<div className="relative flex cursor-pointer w-40 h-9" onClick={() => setChecked(!checked)}>
				<input checked={checked} className="hidden" type="checkbox" id="test"/>
				<div className="bar w-full rounded-full bg-[#2AD4B9] shadow-md flex justify-center items-center text-white font-bold">
					<span>Oui</span>
				</div>
				<div className="dot absolute w-11 h-11 -top-1 rounded-full bg-white shadow-md">
				</div>
			</div>
		</div>
	);
}
