import { Configuration } from "../../utils/types";

export function selects(config: Configuration) {
	return {
		".select": {
			appearance: "none",
			flexShrink: "0",
			alignSelf: "baseline",
			fontSize: "16px",
			padding: "8px 36px 8px 16px",
			border: `1px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "4px",
			backgroundColor: "transparent",
			backgroundImage:
				"linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)",
			backgroundPosition: "calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%)",
			backgroundSize: "4px 4px,4px 4px",
			backgroundRepeat: "no-repeat",
			cursor: "pointer",
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
				[`.select-${size}`]: {
					padding: `${4 * (index + 1)}px ${12 * (index + 1) + 20}px ${4 * (index + 1)}px ${
						8 * (index + 1)
					}px`,
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		/**
		 * Color Variations
		 */
		...Object.keys(config.colors)
			.map((color) => ({
				[`.select-${color}`]: {
					"&:focus-visible": {
						borderColor: config.colors[color].DEFAULT.css(),
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
