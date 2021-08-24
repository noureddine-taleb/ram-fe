import React from "react";
import { Link } from "react-router-dom";
import { IconEye } from "../../components/Icons/IconEye";
import { IconPencil } from "../../components/Icons/IconPencil";
import { IconPlus } from "../../components/Icons/IconPlus";
import { IconPreference } from "../../components/Icons/IconPreference";
import { IconSearch } from "../../components/Icons/IconSearch";
import { Pagination } from "./components/Pagination";

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
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
		["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", <div className="flex justify-center items-center"> <button className="text-[#2AD4B9] border border-[#2AD4B9] rounded w-20 h-8 flex items-center justify-center font-bold">Validée</button></div>],
	]

	return (
		<div>
			<div className="rounded-lg overflow-hidden">
				<div className="w-full h-24 bg-white flex items-center justify-between px-3">
					<Link to="/dashboard/stagiaire/ajouter-stagiaire">
						<button className="bg-[#2AD4B9] flex rounded-lg w-72 h-11 items-center justify-center px-3 text-white font-bold text-base">
							<IconPlus className="w-7 h-7 mr-9" />
							Ajouter un Stagiaire
						</button>
					</Link>
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
									head.map((h, i) => <th key={i} className="h-14">{h}</th>)
								}
								{
									<th className="h-14">Action</th>
								}
							</tr>
						</thead>
						<tbody className="font-normal text-xs not-italic text-center">
							{
								data.map((r, i) =>
									<tr key={i}>
										{r.map((d, i) => <td key={i}>{d}</td>)}
										{
											<td className="flex justify-center my-3 gap-1">
												<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
													<IconEye />
												</button>
												<button className="w-[28px] h-[28px] bg-[#FDBC64] text-white rounded-md flex items-center justify-center px-1" >
													<IconPencil className="w-[13px] h-[13px]" />
												</button>
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