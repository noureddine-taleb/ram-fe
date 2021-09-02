export function TextArea({ name, id, label, placeholder, className }: { name: string, id: string, label: string, placeholder: string, className?: string }) {
	return (
		<div className={`flex flex-col ${className}`}>
			<label className="text-[#525F7F] font-bold text-sm pb-1" htmlFor={name}>{label}</label>
			<textarea className="pl-2 pt-2 h-full placeholder-gray-400 hover:outline-none shadow-md rounded appearance-none text-xs" id={id} name={name} placeholder={placeholder} />
		</div>
	);
}