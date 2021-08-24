export function Button({label, className}: {label: string, className: string})
{
	return (
		<button className={`${className} rounded-lg text-lg font-bold`}>
			{label}
		</button>
	);
}