import { Configuration } from "../../utils/types";

export function buttons(config: Configuration) {
	return {
		/**
		 * Base Button Settings
		 */
		".button": {
			backgroundColor: config.colors.basis.DEFAULT.css(),
			color: config.colors.basis.DEFAULT.isDark()
				? config.colors.basis.LIGHT.css()
				: config.colors.basis.DARK.css(),
			border: `1px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "4px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "2px",
			padding: "8px 16px",
			fontWeight: "700",
			transition: "all .15s ease-in-out",
			alignSelf: "baseline",
			fontSize: "16px",

			"&:not(:disabled)": {
				"&:active:hover,&:active:focus": {
					transform: "scale(0.95)",
				},
			},

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: "2px solid black",
			},

			"&:disabled": {
				opacity: "0.5",
				cursor: "not-allowed",
			},
		},

		/**
		 * Size Modifiers
		 */
		...["sm", "md", "lg", "xl"]
			.map((size, index) => ({
				[`.button-${size}`]: {
					padding: `${4 * (index + 1)}px ${8 * (index + 1)}px`,
					fontSize: `${index < 1 ? 14 : index > 2 ? 18 : 16}px`,
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		/**
		 * Colors and Variations
		 */
		...Object.keys(config.colors)
			.map((color) => {
				const shades = config.colors[color];
				const base = shades[500];
				const foreground = base.isDark() ? shades.LIGHT : shades.DARK;
				const softBase = shades[100];
				const softForeground = base.isDark() ? shades[600] : shades[800];
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

						"&:focus-visible": {
							outlineColor: shades[500].css(),
						},
					},

					[`.button-outlined-${color}`]: {
						borderColor: base.css(),
						backgroundColor: "transparent",
						color: base.css(),

						"&:not(:disabled):hover": {
							backgroundColor: base.css(),
							color: foreground.css(),
						},

						"&:focus-visible": {
							outlineColor: shades[500].css(),
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
