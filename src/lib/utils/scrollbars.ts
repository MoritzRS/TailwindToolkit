import { Configuration } from "../../utils/types";

export function scrollbar(config: Configuration) {
	return {
		".scrollbar": {
			"--scrollbar-background": config.colors.basis.LIGHT.css(),
			"--scrollbar-foreground": config.colors.basis.DEFAULT.css(),
			scrollbarColor: `var(--scrollbar-foreground) var(--scrollbar-background)`,
			scrollbarWidth: "16px",
		},

		".scrollbar::-webkit-scrollbar": {
			height: "8px",
			width: "8px",
			backgroundColor: "var(--scrollbar-background)",
		},

		".scrollbar::-webkit-scrollbar-thumb": {
			backgroundColor: "var(--scrollbar-foreground)",
		},

		...Object.keys(config.colors)
			.map((color) => ({
				[`.scrollbar-light-${color}`]: {
					"--scrollbar-background": config.colors[color].LIGHT.css(),
					"--scrollbar-foreground": config.colors[color].DEFAULT.css(),
				},
				[`.scrollbar-dark-${color}`]: {
					"--scrollbar-background": config.colors[color].DARK.css(),
					"--scrollbar-foreground": config.colors[color].DEFAULT.css(),
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
