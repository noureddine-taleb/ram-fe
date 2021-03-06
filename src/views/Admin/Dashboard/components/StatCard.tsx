import React, { CSSProperties } from "react";
import { IconEllipsis } from "components/Icons/IconEllipsis";
import { Link } from "react-router-dom";

type ColorScheme = { bg: string, text: string };
type StatCardProps = { icon: JSX.Element, title: string, count: number, scheme: ColorScheme, url: string };

export function StatCard({ icon, title, count, scheme, url }: StatCardProps) {
	return (
		<Link to={url}>
			<div className="bg-white rounded-lg w-72 sm:w-96 h-36 shadow-2xl">
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
		</Link>
	)
}