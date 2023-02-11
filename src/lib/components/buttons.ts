import { CSSRuleObject } from "tailwindcss/types/config";
import { Configuration } from "../../utils/types";

export function buttons(config: Configuration) {
	return {
		/**
		 * Base Button Settings
		 */
		".btn": {
			border: `1px solid black`,
			borderRadius: "4px",
			display: "flex",
			gap: "2px",
			padding: "8px 16px",
			fontWeight: "700",

			...Object.keys(config.colors)
				.map((color) => {
					const background = config.colors[color][500].css();
					const foreground =
						config.colors[color][500].brightness() > 0.6
							? config.colors[color].DARK.css()
							: config.colors[color].LIGHT.css();
					return {
						[`&-${color}`]: {
							borderColor: background,
							backgroundColor: background,
							color: foreground,
						},
					};
				})
				.reduce((a, b) => ({ ...a, ...b })),
		},
	};
}
