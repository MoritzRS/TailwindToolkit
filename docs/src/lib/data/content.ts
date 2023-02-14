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
				name: "Badges",
				href: "/components/badges",
				tags: ["badge", "info", "chip"],
			},
			{
				name: "Buttons",
				href: "/components/buttons",
				tags: ["button"],
			},
			{
				name: "Button Groups",
				href: "/components/buttongroups",
				tags: ["button", "group"],
			},
			{
				name: "Checkboxes",
				href: "/components/checkboxes",
				tags: ["select", "check", "box"],
			},
			{
				name: "Dividers",
				href: "/components/dividers",
				tags: ["divid", "space", "line"],
			},
			{
				name: "Infos",
				href: "/components/infos",
				tags: ["info", "messag", "notif"],
			},
			{
				name: "Radios",
				href: "/components/radios",
				tags: ["radio", "button", "select"],
			},
			{
				name: "Toggles",
				href: "/components/toggles",
				tags: ["toggl", "switch", "check", "select"],
			},
		],
	},
];
