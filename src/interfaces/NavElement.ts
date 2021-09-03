export interface NavElement {
	icon: ({ }: any) => JSX.Element;
	label: string;
	link: string;
};