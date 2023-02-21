import { Configuration } from "../../utils/types";

export function ranges(config: Configuration) {
	return {
		".range": {
			"-webkit-appearance": "none",
			cursor: "pointer",
			overflow: "hidden",
			borderRadius: "9999px",
			background: "transparent",
			height: "20px",
			width: "300px",

			"&:focus": {
				outline: "none",
			},

			"&:disabled": {
				cursor: "not-allowed",
				opacity: "0.5",
			},

			/**
			 * Track
			 */
			"&::-webkit-slider-runnable-track": {
				width: "100%",
				height: "20px",
				borderRadius: "9999px",
				backgroundColor: config.colors.basis.DEFAULT.css(0.2),
			},

			"&::-moz-range-track": {
				width: "100%",
				height: "20px",
				borderRadius: "9999px",
				backgroundColor: config.colors.basis.DEFAULT.css(0.2),
			},

			/**
			 * Thumb
			 */
			"&::-webkit-slider-thumb": {
				"-webkit-appearance": "none",
				position: "relative",
				top: "50%",
				transform: "translateY(-50%)",
				borderRadius: "9999px",
				border: "none",
				backgroundColor: config.colors.basis.DARK.css(),
				width: "20px",
				height: "20px",
				color: config.colors.basis.DEFAULT.css(),
				boxShadow: `0 0 0 3px ${config.colors.basis.DEFAULT.css()} inset, calc(9999px * -1 - 8px) 0 0 9999px`,
			},

			"&::-moz-range-thumb": {
				"-webkit-appearance": "none",
				position: "relative",
				top: "50%",
				borderRadius: "9999px",
				border: "none",
				backgroundColor: config.colors.basis.DARK.css(),
				width: "20px",
				height: "20px",
				color: config.colors.basis.DEFAULT.css(),
				boxShadow: `0 0 0 3px ${config.colors.basis.DEFAULT.css()} inset, calc(9999px * -1 - 8px) 0 0 9999px`,
			},
		},

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => ({
				[`.range-${color}`]: {
					"&::-webkit-slider-thumb": {
						backgroundColor: config.colors[color].DARK.css(),
						color: config.colors[color].DEFAULT.css(),
						boxShadow: `0 0 0 3px ${config.colors[
							color
						].DEFAULT.css()} inset, calc(9999px * -1 - 8px) 0 0 9999px`,
					},

					"&::-moz-range-thumb": {
						backgroundColor: config.colors[color].DARK.css(),
						color: config.colors[color].DEFAULT.css(),
						boxShadow: `0 0 0 3px ${config.colors[
							color
						].DEFAULT.css()} inset, calc(9999px * -1 - 8px) 0 0 9999px`,
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
