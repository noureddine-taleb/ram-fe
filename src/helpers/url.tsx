import React from "react";
import { Link } from "react-router-dom";

export function getHeader(path: string) {
	// capitalise words + separator
	const pathParts: any = path.split('/')
		.filter(s => s)
		.map((s: string, i: number, arr) =>
			<span key={i}>
				<Link to={'/' + arr.slice(0, i + 1).join('/')}>
					{s[0].toUpperCase() + s.slice(1).toLowerCase() + (i === (arr.length - 1) ? '' : ' > ')}
				</Link>
			</span>
		)

	// make last word bold
	pathParts[pathParts.length - 1] = <b key={pathParts.length - 1}>{pathParts[pathParts.length - 1]}</b>
	return pathParts;
}

export function urlMatches(url: string, currentUrl: string) {
	url = removeTrailingSlash(url);
	currentUrl = removeTrailingSlash(currentUrl);

	if (url.split("/").length === 2)
		return url === currentUrl;

	return currentUrl.startsWith(url);
}

export function removeTrailingSlash(url: string) {
	if (url.endsWith("/"))
		return url.substr(0, url.length - 1);
	return url;
}