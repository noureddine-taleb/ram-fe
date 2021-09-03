import React from "react";
import { Outlet } from "react-router";
import { Header } from 'components/Header/Header';
import { NavBar } from "components/NavBar/NavBar";
import { navInstructorElems } from "mocks/data";

export function InstructorLayout() {
	return (
		<div className="app flex flex-col flex-wrap w-full">
			<NavBar list={navInstructorElems} />
			<Header list={navInstructorElems} />
			<main className="relative px-[1%] top-[-30px] h-[75%] overflow-y-auto w-full lg:w-4/5">
				<Outlet />
			</main>
		</div>
	);
}