import { Link } from "react-router-dom";
import { IconNextThin } from "components/Icons/IconNextThin";

type ColorScheme = { bg: string, text: string };
type StatCardProps = {children: JSX.Element, title: string, scheme: ColorScheme, url: string};

export function Card({children, title, scheme, url}: StatCardProps)
{
	return (
		<Link to={url}>
			<div className={`${scheme.bg} flex rounded-lg h-[237px] w-[529px] shadow-2xl justify-between items-center px-10`}>
				<div className="flex items-center">
					<div className={`w-24 h-24 pr-5 ${scheme.text}`}>
						{children}
					</div>
					<div className="font-bold text-[#505887] text-[27px]">
						{title}
					</div>
				</div>
				<div>
					<IconNextThin className={`w-[34px] h-[40px] ${scheme.text}`}/>
				</div>
			</div>
		</Link>
	)
}