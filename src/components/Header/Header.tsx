import { SearchBar } from "components/Header/SearchBar";
import { ProfileImg } from "components/Header/ProfileImg";
import { useLocation } from "react-router";
import { IconBell } from "components/Icons/IconBell";
import { getHeader } from "helpers/url";
import { MobileMenu } from "./components/MobileMenu";
import { NavElement } from "interfaces/NavElement";

export function Header({ list }: { list: NavElement[] }) {
  const currentLoc = useLocation().pathname;
  return (
    <header className="bg-red w-full lg:w-4/5 h-[25%] bg-gradient-to-r from-[#f0405c] to-[#c20831] text-white flex flex-col pt-5 relative">
      <MobileMenu list={list} className="top-[72px] lg:hidden" />
      <div className="flex items-center mt-10">
        <div className="ml-4 font-sans text-lg">{getHeader(currentLoc)}</div>
        <div className="ml-auto flex items-center gap-4 sm:gap-8 mr-4">
          <SearchBar />
          <IconBell
            className="mt-1 w-6 h-7"
            notificationAvailable={true}
          ></IconBell>
          <span>|</span>
          <ProfileImg />
        </div>
      </div>
    </header>
  );
}
