import React, { useRef } from "react";
import { IconImg } from "components/Icons/IconImg";

export function UploadImg({ className }: { className?: string }) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<button onClick={() => inputRef?.current?.click()} className={`${className} bg-[#FFE2E2] text-[#EF9797] rounded-lg flex flex-col items-center justify-center`}>
			<IconImg className="w-28 h-28"></IconImg>
			<div className="font-bold text-lg">Charger une Photo</div>
			<input className="hidden" ref={inputRef} type="file" name="" id="" />
		</button>
	);
}