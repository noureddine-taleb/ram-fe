import React from "react";
import { IconImg } from "../Icons/IconImg";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { ListInput } from "./ListInput";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

export function PersonalInfoMiddle()
{
	const data = [
		{ value: "lorem", label: "lorem" },
		{ value: "lorem", label: "lorem" },
		{ value: "lorem", label: "lorem" },
		{ value: "lorem", label: "lorem" },
	];

	return (
		<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] rounded-lg shadow-md mb-5">
				<div className="flex flex-wrap flex-col justify-between gap-y-5">
					<div className="flex w-full gap-x-4">
						<TextInput className="w-full" id="f1" name="f1" label="Matricule" placeholder="ipsum"></TextInput>
						<TextInput className="w-full" id="f2" name="f2" label="N°Passeport" placeholder="ipsum"></TextInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date de Validité" placeholder="ipsum"></DateInput>
						<TextInput className="w-full" id="f2" name="f2" label="Email" placeholder="Ipsum@gmail.com"></TextInput>
					</div>
					<div className="flex w-full gap-x-4">
						<ListInput className="w-full" id="f4" name="f4" label="Fonction" placeholder="ipsum" data={data}></ListInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date d’entrée a la Compagnie" placeholder="ipsum"></DateInput>
						<CheckboxInput className="w-full" ids={["f9", "f10"]} name="f9" label="Situation Familiale" values={["Célibataire", "Mariée"]}></CheckboxInput>
						<ListInput className="w-full" id="f4" name="f4" label="Secteur Vol" placeholder="B744" data={data}></ListInput>
					</div>
					<div className="flex w-full gap-x-4">
						<DateInput className="w-full" id="f3" name="f3" label="Date de visite médicale" placeholder="ipsum"></DateInput>
						<TextInput className="w-full" id="f2" name="f2" label="Durée de VM" placeholder="ipsum"></TextInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date de Lâcher" placeholder="ipsum"></DateInput>
						<NumberInput className="w-full" id="f4" name="f4" label="Séniorité" placeholder="3"></NumberInput>						
					</div>
				</div>
		</div>
	);
}