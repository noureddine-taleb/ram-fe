import { Outlet } from "react-router";
import { NavBar } from '../NavBar/NavBar';
import { Header } from '../Header/Header';

export function DashboardLayout()
{
	return (
		<div className="app flex flex-col flex-wrap">
				<NavBar/>
				<Header/>
				<div className="relative px-7 top-[-30px] h-[85%] overflow-auto">
					<Outlet/>
				</div>
		</div>
	);
}