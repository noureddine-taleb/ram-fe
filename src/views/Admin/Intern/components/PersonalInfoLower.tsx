import React from "react";
import { Button } from "components/Button";
import { DateInput } from "components/DateInput";
import { Header } from "components/Header";
import { TextInput } from "components/TextInput";

export function PersonalInfoLower() {
	return (
		<div className="flex flex-col bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden mb-5">
			<Header title="License" />
			<div className="flex flex-col px-10 py-5">
				<div className="flex flex-wrap flex-col justify-between gap-5">
					<div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
						<TextInput className="w-full" id="f1" name="f1" label="N°" placeholder="ipsum"></TextInput>
						<TextInput className="w-full" id="f2a" name="f2a" label="Livré par" placeholder="ipsum"></TextInput>
						<DateInput className="w-full" id="f3" name="f3" label="Livré le" placeholder="ipsum"></DateInput>
					</div>
					<div className="flex gap-4 min-h-14 flex-wrap lg:flex-nowrap">
						<Button className="h-14 w-full bg-[#FFE2E2] text-[#EF9797] border border-[#EB8383]">
							Afficher License
						</Button>
						<Button className="h-14 w-full bg-[#EBF2F9] text-[#6F7994] border border-[#648CB2]">
							Charger License
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}