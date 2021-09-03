import React from "react";
import { Link } from "react-router-dom";
import { IconEye } from "components/Icons/IconEye";
import { IconPencil } from "components/Icons/IconPencil";
import { IconPlus } from "components/Icons/IconPlus";
import { IconPreference } from "components/Icons/IconPreference";
import { IconSearch } from "components/Icons/IconSearch";
import { dummyTable } from "mocks/data";
import { Pagination } from "components/Pagination";
import { ValidateButton } from "components/ValidateButton";
import { ButtonIcon } from "components/ButtonIcon";

export function Interns() {
	return (
		<div className="min-w-[800px] overflow-auto">
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
									dummyTable.head.map((h, i) => <th key={i} className="h-14">{h}</th>)
								}
								<th className="h-14">Validité de Passeport</th>
								<th className="h-14">Action</th>
							</tr>
						</thead>
						<tbody className="font-normal text-xs not-italic text-center">
							{
								dummyTable.data.map((r, i) =>
									<tr key={i}>
										{r.map((d, i) => <td key={i}>{d}</td>)}
										<td>
											<ValidateButton />
										</td>
										<td className="flex justify-center my-3 gap-1">
											<ButtonIcon className="bg-[#2AD4B9]">
												<IconEye />
											</ButtonIcon>
											<ButtonIcon className="bg-[#FDBC64]">
												<IconPencil className="w-[13px] h-[13px]" />
											</ButtonIcon>
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