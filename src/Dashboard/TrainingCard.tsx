import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Training = { title: string, location: string, time: string };
export function TrainingCard(props: Training)
{
	return (
		<div className="w-[232px] h-[173px] flex flex-col">
			<div className="flex w-full h-2/3 justify-between bg-[#FCEFEF] rounded-t-lg px-[10px] pt-3 text-white flex-wrap">
				<span className="rounded-full bg-[#2AE7C8] h-[fit-content] px-2 text-[8px] font-medium leading-4">{props.location}</span>
				<span className="rounded-full bg-[#FDBC64] h-[fit-content] px-2 text-[8px] font-medium leading-4">{props.time}</span>
				<div className="w-full flex">
					<FontAwesomeIcon icon="chalkboard" className="h-[90%] text-8xl mx-auto text-[#A93434]"></FontAwesomeIcon>
				</div>
			</div>
			<div className="flex w-full h-1/3 justify-between bg-[#F5F5F5] rounded-b-lg px-[20px] pb-3">
				<span className="mt-auto text-[#25396F] text-sm font-bold">{props.title}</span>
				<FontAwesomeIcon icon="arrow-right" className="mt-auto text-[#2AE7C8]"></FontAwesomeIcon>
			</div>
		</div>
		);
}