export type Page = {
	name: string;
	href: string;
	tags: string[];
};

export type Category = {
	name: string;
	pages: Page[];
};

export const content: Category[] = [
	{
		name: "Guide",
		pages: [],
	},
	{
		name: "Utilities",
		pages: [],
	},
	{
		name: "Components",
		pages: [],
	},
];
