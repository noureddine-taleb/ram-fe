import React from "react";
import { Outlet } from "react-router";
import { Header } from 'components/Header/Header';
import { NavBar } from "components/NavBar/NavBar";

export function DashboardLayout() {
	return (
		<div className="app flex flex-col flex-wrap w-full">
			<NavBar />
			<Header />
			<div className="relative px-[1%] top-[-30px] h-[80%] overflow-y-auto w-full lg:w-4/5">
				<Outlet />
			</div>
		</div>
	);
}