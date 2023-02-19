import { Configuration } from "../../utils/types";

export function tabs(config: Configuration) {
	return {
		".tabs": {
			display: "flex",
			gap: "0",
			alignItems: "end",
			justifyContent: "start",
		},

		".tab": {
			padding: "8px 16px",
			fontSize: "16px",
			position: "relative",
			transition: "color .15s ease-in-out",

			"&:after": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: "2px",
				bottom: "0",
				left: "0",
				backgroundColor: config.colors.basis.DEFAULT.css(),
				transform: "scaleX(0)",
			},
		},

		".tab-active": {
			"&:after": {
				transform: "scaleX(1)",
			},
		},

		...Object.keys(config.colors)
			.map((color) => ({
				[`.tab-${color}`]: {
					color: config.colors[color].DEFAULT.css(),

					"&:after": {
						backgroundColor: config.colors[color].DEFAULT.css(),
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
