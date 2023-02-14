import { Configuration } from "../../utils/types";

export function badges(config: Configuration) {
	return {
		".badge": {
			display: "inline-flex",
			gap: "2px",
			flexShrink: "0",
			alignSelf: "baseline",
			fontSize: "14px",
			padding: "1px 4px",
			borderRadius: "4px",
			backgroundColor: config.colors.basis.DEFAULT.css(),
		},

		...Object.keys(config.colors)
			.map((color) => ({
				[`.badge-${color}`]: {
					backgroundColor: config.colors[color].DEFAULT.css(),
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
