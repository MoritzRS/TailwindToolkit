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
		pages: [{ name: "Scrollbars", href: "/utils/scrollbars", tags: ["scroll", "bar"] }],
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
				name: "Chips",
				href: "/components/chips",
				tags: ["chip", "info", "badge"],
			},
			{
				name: "Dividers",
				href: "/components/dividers",
				tags: ["divid", "space", "line"],
			},
			{
				name: "Expandables",
				href: "/components/expandables",
				tags: ["expand", "accord"],
			},
			{
				name: "Infos",
				href: "/components/infos",
				tags: ["info", "messag", "notif"],
			},
			{
				name: "Inputs",
				href: "/components/inputs",
				tags: ["input", "field", "text", "form"],
			},
			{
				name: "Input Groups",
				href: "/components/inputgroups",
				tags: ["input", "group", "field", "text", "form"],
			},
			{
				name: "Links",
				href: "/components/links",
				tags: ["link", "button"],
			},
			{
				name: "Radios",
				href: "/components/radios",
				tags: ["radio", "button", "select"],
			},
			{
				name: "Ranges",
				href: "/components/ranges",
				tags: ["range", "slid"],
			},
			{
				name: "Selects",
				href: "/components/selects",
				tags: ["select", "choose", "choice"],
			},
			{
				name: "Steps",
				href: "/components/steps",
				tags: ["step", "progress"],
			},
			{
				name: "Tabs",
				href: "/components/tabs",
				tags: ["tab", "link", "nav"],
			},
			{
				name: "Toggles",
				href: "/components/toggles",
				tags: ["toggl", "switch", "check", "select"],
			},
		],
	},
];
