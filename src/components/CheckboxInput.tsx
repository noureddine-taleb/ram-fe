export function CheckboxInput({ name, ids, label, values, className }: { name: string, ids: string[], label: string, values: string[], className?: string }) {
	return (
		<div className={`flex flex-col ${className}`}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor={name}>{label}</label>
			<div className="flex gap-2">
				{
					values.map((v, i) => {
						return (
							<div key={i} className="flex pl-2 shadow-md rounded appearance-none h-8 bg-white items-center px-5 gap-2 w-1/2">
								<input type="radio" name={name} value={v} id={ids[i]}></input>
								<label className="text-xs" htmlFor={ids[i]}>{v}</label>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}