import React, { CSSProperties } from "react";
import { IconEllipsis } from "../../../components/Icons/IconEllipsis";

type ColorScheme = { bg: string, text: string };
type StatCardProps = {icon: JSX.Element, title: string, count: number, scheme: ColorScheme};

export function StatCard({icon, title, count, scheme}: StatCardProps)
{
	return (
		<div className="bg-white rounded-lg h-40 w-[450px] shadow-2xl" style={{ "--tw-shadow": "0 25px 50px -12px rgb(255 255 255);" } as CSSProperties}>
			<div className={`${scheme.bg} flex flex-wrap p-4 w-full h-full rounded-lg`}>
				<div className="flex flex-col w-1/2 justify-between">
					<span className={`${scheme.text} text-4xl font-semibold w-14 h-14`}>
						{icon}
					</span>
					<span className="text-gray-600 text-3xl font-semibold">{title}</span>
				</div>

				<div className="flex flex-col w-1/2 justify-between">
					<IconEllipsis className={`ml-auto ${scheme.text} text-2xl font-semibold w-1 h-5`}></IconEllipsis>
					<span className={`text-right ${scheme.text} text-4xl font-semibold`}>{count}</span>
				</div>
			</div>
		</div>
	)
}