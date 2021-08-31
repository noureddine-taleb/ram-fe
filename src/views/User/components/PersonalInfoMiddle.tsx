import React from "react";
import { dataList } from "mocks/data";
import { CheckboxInput } from "components/CheckboxInput";
import { DateInput } from "components/DateInput";
import { ListInput } from "components/ListInput";
import { NumberInput } from "components/NumberInput";
import { TextInput } from "components/TextInput";
import { ListInputSave } from "components/ListInputSave";

export function PersonalInfoMiddle()
{
	return (
		<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] rounded-lg shadow-md mb-5">
				<div className="flex flex-wrap flex-col justify-between gap-y-5">
					<div className="flex w-full gap-x-4">
						<TextInput className="w-full" id="f1d" name="f1d" label="Matricule" placeholder="ipsum"></TextInput>
						<TextInput className="w-full" id="f2n" name="f2n" label="N°Passeport" placeholder="ipsum"></TextInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date de Validité" placeholder="ipsum"></DateInput>
						<TextInput className="w-full" id="f2k" name="f2k" label="Email" placeholder="Ipsum@gmail.com"></TextInput>
					</div>
					<div className="flex w-full gap-x-4">
						<ListInput className="w-full" id="f4" name="f4" label="Fonction" placeholder="ipsum" data={dataList}></ListInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date d’entrée a la Compagnie" placeholder="ipsum"></DateInput>
						<CheckboxInput className="w-full" ids={["f9", "f10"]} name="f9" label="Situation Familiale" values={["Célibataire", "Mariée"]}></CheckboxInput>
					</div>
					<div className="flex w-full gap-x-4">
						<ListInput className="w-full" id="f4" name="f4" label="Secteur Vol" placeholder="B744" data={dataList}></ListInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date de visite médicale" placeholder="ipsum"></DateInput>
						<TextInput className="w-full" id="f2y" name="f2y" label="Durée de VM" placeholder="ipsum"></TextInput>
					</div>
					<div className="flex w-full gap-x-4">
						<DateInput className="w-full" id="f3" name="f3" label="Date de Lâcher" placeholder="ipsum"></DateInput>
						<NumberInput className="w-full" id="f4" name="f4" label="Séniorité" placeholder="3"></NumberInput>						
						<ListInputSave className="w-full" id="f4" name="f4" label="Roles" placeholder="ipsum" data={dataList}></ListInputSave>
					</div>
				</div>
		</div>
	);
}