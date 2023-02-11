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
				const base = shades[500];
				const foreground = base.brightness() > 0.6 ? shades.DARK : shades.LIGHT;
				const softBase = shades[100];
				const softForeground = base.brightness() > 0.6 ? shades[800] : shades[600];
				return {
					[`.button-${color}`]: {
						borderColor: base.css(),
						backgroundColor: base.css(),
						color: foreground.css(),

						"&:focus-visible": {
							outlineColor: shades[500].css(),
						},
					},

					[`.button-soft-${color}`]: {
						borderColor: softBase.css(),
						backgroundColor: softBase.css(),
						color: softForeground.css(),
					},

					[`.button-outlined-${color}`]: {
						borderColor: base.css(),
						backgroundColor: "transparent",
						color: base.css(),

						"&:hover": {
							backgroundColor: base.css(),
							color: foreground.css(),
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
