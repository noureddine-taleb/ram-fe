import React from "react";
import { IconPreference } from "components/Icons/IconPreference";
import { IconSearch } from "components/Icons/IconSearch";
import { dummyTable } from "mocks/data";
import { Pagination } from "components/Pagination";
import { ButtonIcon } from "components/ButtonIcon";
import { IconDoc } from "components/Icons/IconDoc";
import { IconEye } from "components/Icons/IconEye";

export function Trainings() {
	return (
		<div className="flex flex-col gap-y-4">
			<div className="rounded-lg shadow-xl min-w-[800px] overflow-auto">
				<div className="w-full h-24 bg-white flex items-center justify-between px-3">
					<div className="w-full h-16 bg-white font-semibold text-lg px-8 flex items-center rounded-t-lg">
						Liste des Formations
					</div>
					<div className="flex gap-1">
						<input className="hover:outline-none border border-[#929292] border-opacity-50 appearance-none rounded pl-5 placeholder-[#929292]" placeholder="Recherche" type="text" />
						<button className="bg-[#EC7C89] w-11 h-11 text-white rounded flex justify-center items-center">
							<IconPreference className="w-6 h-6" ></IconPreference>
						</button>
						<button className="bg-[#C40B33] w-11 h-11 text-white rounded flex justify-center items-center">
							<IconSearch className="w-6 h-6" ></IconSearch>
						</button>
					</div>
				</div>
				<div className="p-6 bg-gradient-to-br from-[#F4F4F4] to-white">
					<table className="table-auto w-full">
						<thead className="border-b-[1px] border-[#7D001C]">
							<tr className="font-bold text-sm leading-5 text-[#7D001C]">
								{
									dummyTable.head.map((h, i) => <th key={i} className="h-14">{h}</th>)
								}
								<th className="h-14">Stagiaires</th>
								<th className="h-14">Pièce Jointe</th>
							</tr>
						</thead>
						<tbody className="font-normal text-xs not-italic text-center">
							{
								dummyTable.data.map((r, i) =>
									<tr key={i}>
										{r.map((d, i) => <td key={i}>{d}</td>)}
										<td>
											<div className="w-20 mx-auto rounded flex justify-between items-center my-3 p-1 border border-[#2AD4B9]">
												<div className="text-[#2AD4B9] font-bold mx-auto">
													12
												</div>
												<ButtonIcon className="bg-[#2AD4B9]" >
													<IconEye className="w-[16px] h-[16px] font-extrabold" />
												</ButtonIcon>
											</div>
										</td>
										<td>
											<div className="flex justify-center my-3 gap-1">
												<ButtonIcon className="text-[#1F6AC2] border border-[#1F6AC2] w-9 h-9" >
													<IconDoc className="w-[26px] h-[26px]" />
												</ButtonIcon>
											</div>
										</td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex">
				<div className="ml-auto">
					<Pagination />
				</div>
			</div>
		</div>
	)
}