import { IconSearch } from "components/Icons/IconSearch";

export function SearchBar() {
	return (
		<div className="relative w-[40vw] sm:w-auto">
			<div className="absolute top-2 left-3">
				<IconSearch className="text-white w-6 h-5" />
			</div>
			<input className="h-[40px] bg-transparent rounded-[20px] max-w-full appearance-none border
			focus:outline-none pl-10 placeholder-current" type="text" placeholder="Rechercher" name="" id="" />
		</div>

	);
}