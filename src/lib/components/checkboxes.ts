import { Configuration } from "../../utils/types";

export function checkboxes(config: Configuration) {
	return {
		".checkbox": {
			appearance: "none",
			width: "20px",
			height: "20px",
			flexShrink: "0",
			borderRadius: "4px",
			border: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			cursor: "pointer",

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			},

			"&:checked": {
				backgroundColor: config.colors.basis.DEFAULT.css(),
				backgroundRepeat: "no-repeat",
				animation: "checkbox .25s ease-in-out",
			},

			"&:disabled": {
				opacity: "0.5",
				cursor: "not-allowed",
			},
		},

		/**
		 * Size Variations
		 */
		".checkbox-sm": {
			width: "16px",
			height: "16px",
		},
		".checkbox-md": {
			width: "20px",
			height: "20px",
		},
		".checkbox-lg": {
			width: "24px",
			height: "24px",
		},
		".checkbox-xl": {
			width: "28px",
			height: "28px",
		},

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => {
				const shades = config.colors[color];
				const background = shades.DEFAULT;
				const foreground = background.brightness() > 0.6 ? shades.DARK : shades.LIGHT;
				return {
					[`.checkbox-${color}`]: {
						borderColor: background.css(),

						"&:focus-visible": {
							outlineColor: background.css(),
						},

						"&:checked": {
							backgroundColor: background.css(),
							backgroundImage: `linear-gradient(-45deg, transparent 65%, ${background.css()} 65.99%),
                                linear-gradient(45deg, transparent 75%, ${background.css()} 75.99%),
                                linear-gradient(-45deg, ${background.css()} 40%, transparent 40.99%),
                                linear-gradient(
                                    45deg,
                                    ${background.css()} 30%,
                                    ${foreground.css()} 30.99%,
                                    ${foreground.css()} 40%,
                                    transparent 40.99%
                                ),
                                linear-gradient(-45deg, ${foreground.css()} 50%, ${background.css()} 50.99%)`,
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),

		"@keyframes checkbox": {
			"0%": {
				backgroundPositionY: "5px",
			},
			"50%": {
				backgroundPositionY: "-2px",
			},
			"100%": {
				backgroundPositionY: "0",
			},
		},
	};
}
