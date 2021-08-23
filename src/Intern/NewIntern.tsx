import { Header } from "./Header";
import { PersonalInfoUpper } from "./PersonalInfoUpper";
import { PersonalInfoMiddle } from "./PersonalInfoMiddle";
import { PersonalInfoLower } from "./PersonalInfoLower";
import { Button } from "./Button";

export function NewIntern()
{
	return (
		<div className="flex flex-col">
			<div className="rounded-lg px-2">
				<Header title="Information Personnelles"/>
				<PersonalInfoUpper></PersonalInfoUpper>
				<PersonalInfoMiddle></PersonalInfoMiddle>
				<PersonalInfoLower></PersonalInfoLower>
				<Button className="w-full h-14 bg-[#D7FCF6] text-[#2AD4B9] border border-[#2AE7C8]" label="Enregister"></Button>
			</div>
		</div>
	)
}