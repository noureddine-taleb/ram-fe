import React from "react";
import { IconImg } from "../../../components/Icons/IconImg";

export function UploadImg() {
	return (
		<button className="w-1/6 h-72 bg-[#FFE2E2] text-[#EF9797] rounded-lg flex flex-col items-center justify-center">
			<IconImg className="w-28 h-28"></IconImg>
			<div className="font-bold text-lg">Charger une Photo</div>
		</button>
	);
}