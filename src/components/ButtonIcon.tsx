export function ButtonIcon({ children, className }: { children: JSX.Element, className: string }) {
	return (
		<button className={`${className} w-[28px] h-[28px] text-white rounded-md flex items-center justify-center px-1`} >
			{children}
		</button>
	);
}