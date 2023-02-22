import { Configuration } from "../../utils/types";

export function links(config: Configuration) {
	return {
		".link": {
			cursor: "pointer",
			textDecoration: "underline",
			color: config.colors.basis.DEFAULT.css(),
		},

		...Object.keys(config.colors)
			.map((color) => ({
				[`.link-${color}`]: {
					color: config.colors[color].DEFAULT.css(),
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
