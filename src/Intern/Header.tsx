export function Header({title}: {title: string})
{
	return (
		<div className="w-full h-16 bg-white font-semibold text-lg px-8 flex items-center rounded-t-lg">
			{title}
		</div>
	);
}