import React from "react";
import { Outlet } from "react-router";
import { Header } from 'components/Header/Header';
import { NavBar } from "components/NavBar/NavBar";

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