import { Configuration } from "../../utils/types";

export function chips(config: Configuration) {
	return {
		".chip": {
			display: "inline-flex",
			gap: "2px",
			flexShrink: "0",
			alignSelf: "baseline",
			fontSize: "14px",
			padding: "1px 6px",
			borderRadius: "999999999px",
			backgroundColor: config.colors.basis.DEFAULT.css(),
			color: config.colors.basis.DEFAULT.isDark()
				? config.colors.basis.LIGHT.css()
				: config.colors.basis.DARK.css(),
		},

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => ({
				[`.chip-${color}`]: {
					backgroundColor: config.colors[color].DEFAULT.css(),
					color: config.colors[color].DEFAULT.isDark()
						? config.colors[color].LIGHT.css()
						: config.colors[color].DARK.css(),
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
