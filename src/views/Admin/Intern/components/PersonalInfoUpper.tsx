import React from "react";
import { dataList } from "mocks/data";
import { Button } from "components/Button";
import { CheckboxInput } from "components/CheckboxInput";
import { DateInput } from "components/DateInput";
import { ListInput } from "components/ListInput";
import { TextArea } from "components/TextArea";
import { TextInput } from "components/TextInput";
import { UploadImg } from "components/UploadImg";

export function PersonalInfoUpper() {
	return (
		<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] mb-5 rounded-b-lg shadow-md">
			<div className="flex gap-5 w-full flex-wrap lg:flex-nowrap">
				<UploadImg className="lg:w-1/6 w-full h-72"></UploadImg>
				<div className="flex lg:w-5/6 w-full flex-wrap flex-col justify-between gap-4">
					<div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
						<TextInput className="w-full" id="f1c" name="f1c" label="Nom" placeholder="ipsum"></TextInput>
						<TextInput className="w-full" id="f2" name="f2" label="Prénom" placeholder="ipsum"></TextInput>
						<DateInput className="w-full" id="f3" name="f3" label="Date de Naissnance" placeholder="ipsum"></DateInput>
					</div>
					<div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
						<ListInput className="w-full" id="f4" name="f4" label="Lieu de Naissance" placeholder="ipsum" data={dataList}></ListInput>
						<TextInput className="w-full" id="f5a" name="f5a" label="Nationnalité" placeholder="lorem"></TextInput>
						<CheckboxInput className="w-full" ids={["f6", "f7"]} name="f6" label="Sexe" values={["Masculin", "Féminin"]}></CheckboxInput>
					</div>
					<div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
						<TextArea className="w-full lg:w-2/3 h-32" id="f8" name="f8" label="Adresse" placeholder="ipsum"></TextArea>
						<div className="flex flex-col w-full lg:w-1/3 gap-4">
							<TextInput className="w-full" id="f5b" name="f5b" label="N°GSM 1" placeholder="+123"></TextInput>
							<TextInput className="w-full" id="f5" name="f5" label="N°GSM 2" placeholder="+123"></TextInput>
						</div>
					</div>
				</div>
			</div>
			<div className="flex mt-7 gap-4 min-h-14 justify-center flex-wrap lg:flex-nowrap">
				<Button className="w-full h-14 bg-[#FFF9F0] text-[#E39832] border border-[#FDBC64]">
					Carton Joune
				</Button>
				<Button className="w-full h-14 bg-[#EBF2F9] text-[#525F7F] border border-[#648CB2]">
					Fiche de Compétence
				</Button>
			</div>
		</div>
	);
}