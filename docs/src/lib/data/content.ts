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
		name: "Theming",
		pages: [
			{
				name: "Colors",
				href: "/theming/colors",
				tags: ["color", "them"],
			},
			{
				name: "Shadows",
				href: "/theming/shadows",
				tags: ["shadow", "them"],
			},
		],
	},
	{
		name: "Utilities",
		pages: [],
	},
	{
		name: "Components",
		pages: [
			{
				name: "Buttons",
				href: "/components/buttons",
				tags: ["button"],
			},
		],
	},
];
