import { Configuration } from "../../utils/types";

export function radios(config: Configuration) {
	return {
		".radio": {
			appearance: "none",
			width: "24px",
			height: "24px",
			flexShrink: "0",
			border: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "99999999px",
			cursor: "pointer",
			position: "relative",

			"&:before": {
				content: "''",
				position: "absolute",
				inset: "0",
				margin: "3px",
				borderRadius: "inherit",
				backgroundColor: config.colors.basis.DEFAULT.css(),
				transform: "scale(0)",
				transition: "transform .15s ease-in-out",
			},

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			},

			"&:checked": {
				"&:before": {
					transform: "scale(1)",
				},
			},

			"&:disabled": {
				opacity: "0.5",
				cursor: "not-allowed",
			},
		},

		/**
		 * Size Variations
		 */
		...["xs", "sm", "md", "lg", "xl"]
			.map((size, i) => ({
				[`.radio-${size}`]: {
					height: `${16 + 4 * i}px`,
					width: `${16 + 4 * i}px`,
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => {
				return {
					[`.radio-${color}`]: {
						borderColor: config.colors[color].DEFAULT.css(),

						"&:before": {
							backgroundColor: config.colors[color].DEFAULT.css(),
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
