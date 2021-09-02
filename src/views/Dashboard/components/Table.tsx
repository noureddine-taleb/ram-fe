import React from "react";
import { IconEye } from "components/Icons/IconEye";

export function Table({ head, data }: { head: string[], data: string[][] }) {
	return (
		<div className="rounded-lg p-6 bg-gradient-to-br from-[#F4F4F4] to-white">
			<table className="table-auto w-full">
				<thead className="border-b-[1px] border-black">
					<tr className="font-bold text-sm leading-5">
						{
							head.map((h, i) => <th key={i}>{h}</th>)
						}
						{
							<th>Action</th>
						}
					</tr>
				</thead>
				<tbody className="font-normal text-xs not-italic text-center">
					{
						data.map((r, i) =>
							<tr key={i}>
								{r.map((d, i) => <td key={i}>{d}</td>)}
								{
									<td className="flex justify-center my-3">
										<div className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
											<IconEye />
										</div>
									</td>
								}
							</tr>
						)
					}
				</tbody>
			</table>
		</div>
	)
}