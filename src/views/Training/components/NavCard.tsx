import { Link, useLocation } from "react-router-dom";
import { removeTrailingSlash } from "helpers/url";

type ColorScheme = { bg: string, text: string };
type StatCardProps = {icon: JSX.Element, title: string, scheme: ColorScheme, url: string};

function getWidth(currentLocation: string, url: string)
{
	url = removeTrailingSlash(url);
	currentLocation = removeTrailingSlash(currentLocation);
	if (currentLocation === url)
		return "w-[343px]";
	return "w-64";
}

function getHeight(currentLocation: string, url: string)
{
	url = removeTrailingSlash(url);
	currentLocation = removeTrailingSlash(currentLocation);
	
	if (currentLocation === url)
		return "h-36";
	return "h-[116px]";
}

export function NavCard({icon, title, scheme, url}: StatCardProps)
{
	const currentLocation = useLocation().pathname;

	return (
		<Link to={url}>
			<div className={`bg-white rounded-lg ${getWidth(currentLocation, url)} ${getHeight(currentLocation, url)} shadow-2xl`}>
				<div className={`${scheme.bg} flex flex-col p-4 w-full h-full rounded-lg justify-center items-center`}>
					<span className={`${scheme.text} text-4xl font-semibold w-14 h-14`}>
						{icon}
					</span>
					<span className={`${scheme.text} text-base font-semibold pt-5`}>{title}</span>
				</div>
			</div>
		</Link>
	)
}