export function Button({ className, children }: { className: string, children: any }) {
	return (
		<button className={`${className} rounded-lg text-lg font-bold flex justify-center items-center gap-x-3`}>
			{children}
		</button>
	);
}