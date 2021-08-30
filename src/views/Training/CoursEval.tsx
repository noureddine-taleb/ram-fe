import React from "react";
import { IconBracket } from "../../components/Icons/IconBracket";
import { IconEye } from "../../components/Icons/IconEye";
import { IconImg } from "../../components/Icons/IconImg";
import { IconPencil } from "../../components/Icons/IconPencil";
import { IconPreference } from "../../components/Icons/IconPreference";
import { IconSearch } from "../../components/Icons/IconSearch";
import { dataList, interns } from "../../mocks/data";
import { Button } from "../Intern/components/Button";
import { DateInput } from "../Intern/components/DateInput";
import { Header } from "../Intern/components/Header";
import { ListInput } from "../Intern/components/ListInput";
import { NumberInput } from "../Intern/components/NumberInput";
import { TextArea } from "../Intern/components/TextArea";
import { TextInput } from "../Intern/components/TextInput";

export function CoursEval()
{
	return (
		<div className="flex flex-col">
			<div className="rounded-lg px-2">
				<Header title="Information du Cours"/>
				<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] mb-5 rounded-b-lg shadow-md">
					<div className="flex flex-wrap gap-5 w-full">
						<div className="flex w-full justify-between gap-x-6">
								<TextInput className="w-full" id="f1c" name="f1c" label="Formation" placeholder="ipsum"></TextInput>
								<TextInput className="w-full" id="f2" name="f2" label="Instructeur" placeholder="ipsum"></TextInput>
								<TextInput className="w-full" id="f2" name="f2" label="Lieu" placeholder="ipsum"></TextInput>
						</div>
						<div className="flex w-full justify-between gap-x-6">
							<DateInput className="w-full" id="f3" name="f3" label="Date Réalisation" placeholder="ipsum"></DateInput>
							<DateInput className="w-full" id="f3" name="f3" label="Date de Controle" placeholder="ipsum"></DateInput>
							<TextInput className="w-full" id="f2" name="f2" label="Durée" placeholder="ipsum"></TextInput>
						</div>
					</div>
					<div className="flex mt-7 gap-x-4 h-[390px]">
						<div className="flex flex-col w-full h-full max-h-full">
							<Header title="Stagiaires"/>
							<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] mb-5 rounded-b-lg shadow-md h-full">
								<div className="flex gap-1">
									<input className="hover:outline-none border border-[#929292] border-opacity-50 appearance-none rounded pl-5 placeholder-[#929292] w-full" placeholder="Recherche" type="text" />
									<button className="bg-[#C40B33] w-11 h-11 text-white rounded flex justify-center items-center">
										<IconSearch className="w-6 h-6" ></IconSearch>
									</button>
								</div>
								<div className="h-52 overflow-auto">
									<table className="table-auto w-full">
										<thead className="border-b-[1px] border-[#7D001C]">
											<tr className="font-bold text-sm leading-5 text-[#7D001C]">
												<th className="h-14">Matricule</th>
												<th className="h-14">Matricule</th>
												<th className="h-14">Matricule</th>
											</tr>
										</thead>
										<tbody className="font-normal text-xs not-italic text-center">
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											{/*<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>
											<tr>
												<td>lorem</td>
												<td>lorem</td>
												<td>lorem</td>
												<td className="flex justify-center my-3 gap-1">
													<button className="w-[28px] h-[28px] bg-[#2AD4B9] text-white rounded-md flex items-center justify-center px-1" >
														<IconBracket />
													</button>
												</td>
											</tr>*/}
										</tbody>
									</table>
								</div>						
							</div>
						</div>
						<div className="flex flex-col w-full h-full">
							<Header title="Fiche de Synthése"/>
							<div className="flex flex-col px-10 py-5 bg-[#F7FAFC] mb-5 rounded-b-lg shadow-md gap-y-4">
								<TextInput className="w-full" id="f1c" name="f1c" label="Note" placeholder="ipsum"></TextInput>
								<TextArea className="w-full h-32" id="f8" name="f8" label="Description" placeholder="ipsum"></TextArea>
								<Button className="w-full h-14 bg-[#D7FCF6] text-[#2AD4B9] border border-[#2AE7C8]">
									Enregister
								</Button>
							</div>
						</div>
					</div>
				</div>				
			</div>
		</div>
	)
}