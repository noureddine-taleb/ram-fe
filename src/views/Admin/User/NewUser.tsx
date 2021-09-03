import React from "react";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { PersonalInfoLower } from "./components/PersonalInfoLower";
import { PersonalInfoMiddle } from "./components/PersonalInfoMiddle";
import { PersonalInfoUpper } from "./components/PersonalInfoUpper";

export function NewUser() {
	return (
		<div className="flex flex-col">
			<div className="rounded-lg px-2">
				<Header title="Information Personnelles" />
				<PersonalInfoUpper></PersonalInfoUpper>
				<PersonalInfoMiddle></PersonalInfoMiddle>
				<PersonalInfoLower></PersonalInfoLower>
				<Button className="w-full h-14 bg-[#D7FCF6] text-[#2AD4B9] border border-[#2AE7C8]">Enregister</Button>
			</div>
		</div>
	)
}