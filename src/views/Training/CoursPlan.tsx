import React from "react";
import { IconEye } from "components/Icons/IconEye";
import { IconImg } from "components/Icons/IconImg";
import { dataList } from "mocks/data";
import { Button } from "components/Button";
import { DateInput } from "components/DateInput";
import { Header } from "components/Header";
import { ListInput } from "components/ListInput";
import { NumberInput } from "components/NumberInput";
import { TextInput } from "components/TextInput";
import { CheckBox } from "./components/CheckBox";

export function CoursPlan()
{
	return (
		<div className="flex flex-col">
			<div className="rounded-lg px-2">
				<Header title="Information du Cours"/>
				<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] mb-5 rounded-b-lg shadow-md">
					<div className="flex flex-wrap gap-5 w-full">
						<div className="flex w-full justify-between gap-x-6">
								<TextInput className="w-full" id="f1c" name="f1c" label="Formation" placeholder="ipsum"></TextInput>
								<TextInput className="w-full" id="f2" name="f2" label="Instructeur" placeholder="ipsum"></TextInput>
						</div>
						<div className="flex w-full justify-between gap-x-6">
							<ListInput className="w-full" id="f4" name="f4" label="Examinateur" placeholder="ipsum" data={dataList}></ListInput>
							<ListInput className="w-full" id="f4" name="f4" label="List des Stagiaires" placeholder="ipsum" data={dataList}></ListInput>
						</div>
						<div className="flex w-full justify-between gap-x-6">
							<DateInput className="w-full" id="f3" name="f3" label="Date du cours" placeholder="ipsum"></DateInput>
							<DateInput className="w-full" id="f3" name="f3" label="Date du Contôle" placeholder="ipsum"></DateInput>
						</div>
						<div className="flex w-full justify-between gap-x-6">
							<CheckBox className="w-full pb-1" label="Test"></CheckBox>
							<NumberInput className="w-full" id="f4" name="f4" label="Durée" placeholder="3"></NumberInput>
						</div>
					</div>
					<div className="flex mt-7 gap-x-4 h-14">
						<Button className="w-1/2 h-14 bg-[#FFF9F0] text-[#E39832] border border-[#FDBC64]">
							<IconEye className="w-10 h-14"></IconEye>
							Apercu
						</Button>
						<Button className="w-1/2 h-14 bg-[#FFF0F0] text-[#E47070] border border-[#C20831]">
							<IconImg className="w-8 h-8"></IconImg>
							Charger une Photo
						</Button>
					</div>
				</div>				
				<Button className="w-full h-14 bg-[#D7FCF6] text-[#2AD4B9] border border-[#2AE7C8]">
					Valider
				</Button>
			</div>
		</div>
	)
}