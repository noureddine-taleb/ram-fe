export function getHeader(path: string)
{
	// capitalise words + separator
	const pathParts: any = path.split('/')
	.filter(s => s)
	.map((s: string, i: number, arr) => <span key={i}>{s[0].toUpperCase() + s.slice(1).toLowerCase() + (i === (arr.length-1) ? '': ' > ')}</span>)

	// make last word bold
	pathParts[pathParts.length - 1] = <b key={pathParts.length - 1}>{pathParts[pathParts.length - 1]}</b>
	return pathParts;
}

export function urlMatches(url: string, currentUrl: string)
{
	// remove trailing slashes
	if (url.endsWith("/"))
		url = url.substr(0, url.length - 1);
	if (currentUrl.endsWith("/"))
		currentUrl = currentUrl.substr(0, currentUrl.length - 1);

	if (url.split("/").length === 2)
		return url === currentUrl;
	
	return currentUrl.startsWith(url);
}