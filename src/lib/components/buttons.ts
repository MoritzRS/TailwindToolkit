import { CSSRuleObject } from "tailwindcss/types/config";
import { Configuration } from "../../utils/types";

export function buttons(config: Configuration) {
	return {
		/**
		 * Base Button Settings
		 */
		".button": {
			border: `1px solid transparent`,
			borderRadius: "4px",
			display: "flex",
			gap: "2px",
			padding: "8px 16px",
			fontWeight: "700",
			transition: "all .15s ease-in-out",

			"&:active:hover,&:active:focus": {
				transform: "scale(0.95)",
			},

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: "2px solid black",
			},
		},

		/**
		 * Colors and Variations
		 */
		...Object.keys(config.colors)
			.map((color) => {
				const shades = config.colors[color];
				const background = shades[500].css();
				const foreground = shades[500].brightness() > 0.6 ? shades.DARK.css() : shades.LIGHT.css();
				return {
					[`.button-${color}`]: {
						borderColor: background,
						backgroundColor: background,
						color: foreground,

						"&:focus-visible": {
							outlineColor: shades[500].css(),
						},
					},

					[`.button-soft-${color}`]: {
						borderColor: foreground,
						backgroundColor: foreground,
						color: background,
					},

					[`.button-outlined-${color}`]: {
						borderColor: background,
						backgroundColor: "transparent",
						color: background,
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
