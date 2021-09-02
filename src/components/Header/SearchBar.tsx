import { IconSearch } from "components/Icons/IconSearch";

export function SearchBar() {
	return (
		<div className="relative">
			<div className="absolute top-2 left-3">
				<IconSearch className="text-white w-6 h-5" />
			</div>
			<input className="h-[40px] bg-transparent rounded-[20px]  appearance-none border
			focus:outline-none pl-10 placeholder-current" type="text" placeholder="Rechercher" name="" id="" />
		</div>

	);
}