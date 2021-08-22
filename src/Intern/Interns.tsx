import { IconPlus } from "../Icons/IconPlus";
import { IconEye } from "../Icons/IconEye";
import { IconSearch } from "../Icons/IconSearch";
import React from "react";
import { IconPreference } from "../Icons/IconPreference";
import { IconPencil } from "../Icons/IconPencil";
import { Pagination } from "./Pagination";

export function Interns() {
	const head = [
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
		"lorem",
	]

	const data = [
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <div className="cursor-pointer text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</div></div>],
	]

	return (
		<div>
			<div className="rounded-lg overflow-hidden">
				<div className="w-full h-24 bg-white flex items-center justify-between px-3">
					<div className="cursor-pointer bg-[#2AD4B9] flex rounded-lg w-72 h-11 items-center justify-center px-3 text-white font-bold text-base">
						<IconPlus className="w-7 h-7 mr-9" />
						Ajouter un Stagiaire
					</div>
					<div className="flex gap-1">
						<input className="hover:outline-none border border-[#929292] border-opacity-50 appearance-none rounded pl-5 placeholder-[#929292]" placeholder="Recherche" type="text" />
						<div className="cursor-pointer bg-[#EC7C89] w-11 h-11 text-white rounded flex justify-center items-center">
							<IconPreference className="w-6 h-6" ></IconPreference>
						</div>
						<div className="cursor-pointer bg-[#C40B33] w-11 h-11 text-white rounded flex justify-center items-center">
							<IconSearch className="w-6 h-6" ></IconSearch>
						</div>
					</div>
				</div>
				<div className="p-6 bg-gradient-to-br from-[#F4F4F4] to-white">
					<table className="table-auto w-full">
						<thead className="border-b-[1px] border-[#7D001C]">
							<tr className="font-bold text-sm leading-5 text-[#7D001C]">
								{
									head.map(h => <th className="h-14">{h}</th>)
								}
								{
									<th className="h-14">Action</th>
								}
							</tr>
						</thead>
						<tbody className="font-normal text-xs not-italic text-center">
							{
								data.map(r =>
									<tr>
										{r.map(d => <td>{d}</td>)}
										{
											<td className="flex justify-center my-3 gap-1">
												<div className="cursor-pointer w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
													<IconEye />
												</div>
												<div className="cursor-pointer w-[28px] h-[28px] bg-[#FDBC64] text-white rounded-md flex items-center justify-center px-1" >
													<IconPencil className="w-[13px] h-[13px]" />
												</div>
											</td>
										}
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex">
				<div className="ml-auto">
					<Pagination/>
				</div>
			</div>
		</div>

	)
}