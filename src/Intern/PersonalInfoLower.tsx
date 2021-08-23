import React from "react";
import { IconImg } from "../Icons/IconImg";
import { Button } from "./Button";
import { CheckboxInput } from "./CheckboxInput";
import { DateInput } from "./DateInput";
import { Header } from "./Header";
import { ListInput } from "./ListInput";
import { TextArea } from "./TextArea";
import { TextInput } from "./TextInput";

export function PersonalInfoLower()
{
	return (
		<div className="flex flex-col bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden mb-5">
			<Header title="License"/>
			<div className="flex flex-col px-10 py-5">
					<div className="flex flex-wrap flex-col justify-between gap-y-5">
						<div className="flex w-full gap-x-4">
							<TextInput className="w-full" id="f1" name="f1" label="N°" placeholder="ipsum"></TextInput>
							<TextInput className="w-full" id="f2" name="f2" label="Livré par" placeholder="ipsum"></TextInput>
							<DateInput className="w-full" id="f3" name="f3" label="Livré le" placeholder="ipsum"></DateInput>
						</div>
						<div className="flex gap-x-4 h-14">
							<Button className="w-1/2 bg-[#FFE2E2] text-[#EF9797] border border-[#EB8383]" label="Afficher License"></Button>
							<Button className="w-1/2 bg-[#EBF2F9] text-[#6F7994] border border-[#648CB2]" label="Charger License"></Button>
						</div>
					</div>
			</div>
		</div>
	);
}