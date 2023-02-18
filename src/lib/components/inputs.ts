import { Configuration } from "../../utils/types";

export function inputs(config: Configuration) {
	return {
		".input": {
			flexShrink: "0",
			alignSelf: "baseline",
			fontSize: "16px",
			padding: "8px 16px",
			border: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "4px",
			transition: "border .15s ease-in-out",

			"&:focus-visible": {
				outline: "none",
			},

			"&:disabled": {
				opacity: "0.5",
				cursor: "not-allowed",
			},
		},

		/**
		 * Size variations
		 */
		...["sm", "md", "lg"]
			.map((size, index) => ({
				[`.input-${size}`]: {
					padding: `${4 * (index + 1)}px ${8 * (index + 1)}px`,
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => ({
				[`.input-${color}`]: {
					"&:focus-visible": {
						borderColor: config.colors[color].DEFAULT.css(),
					},
				},

				[`.input-underlined-${color}`]: {
					borderTop: "none",
					borderLeft: "none",
					borderRight: "none",
					borderRadius: "4px 4px 0 0",

					"&:focus-visible": {
						borderColor: config.colors[color].DEFAULT.css(),
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
