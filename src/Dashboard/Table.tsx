import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Table({head, data}: {head: string[], data: string[][]})
{
	return (
		<div className="rounded-lg p-6 bg-gradient-to-br from-[#F4F4F4] to-white">
			<table className="table-auto w-full">
				<thead className="border-b-[1px] border-black">
					<tr className="font-bold text-sm leading-5">
						{
							head.map(h => <th>{h}</th>)
						}
						{
							<th>Action</th>
						}
					</tr>
				</thead>
				<tbody className="font-normal text-xs not-italic text-center">				
					{
						data.map(r => 
									<tr>
										{ r.map(d => <td>{d}</td>) }
										{ 
											<td className="flex justify-center my-3">
												<div className="w-[28px] h-[28px] bg-green-400 text-white rounded-md flex items-center justify-center" >
													<FontAwesomeIcon icon="eye"/>
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