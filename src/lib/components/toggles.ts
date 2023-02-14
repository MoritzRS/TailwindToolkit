import { Configuration } from "../../utils/types";

export function toggles(config: Configuration) {
	return {
		".toggle": {
			appearance: "none",
			width: "48px",
			height: "24px",
			flexShrink: "0",
			border: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "99999999px",
			cursor: "pointer",
			position: "relative",
			transition: "background .15s ease-in-out",

			"&:after": {
				content: "''",
				position: "absolute",
				height: "16px",
				width: "16px",
				top: "2px",
				left: "2px",
				borderRadius: "inherit",
				backgroundColor: config.colors.basis.DEFAULT.css(),
				transform: "translateX(0)",
				transition: "background, transform .15s ease-in-out",
			},

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			},

			"&:checked": {
				"&:after": {
					transform: "translateX(24px)",
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
				[`.toggle-${size}`]: {
					height: `${16 + 4 * i}px`,
					width: `${32 + 8 * i}px`,

					"&:after": {
						width: `${8 + 4 * i}px`,
						height: `${8 + 4 * i}px`,
					},

					"&:checked:after": {
						transform: `translateX(${16 + 4 * i}px)`,
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		/**
		 * Color variations
		 */
		...Object.keys(config.colors)
			.map((color) => {
				return {
					[`.toggle-${color}`]: {
						"&:checked": {
							borderColor: config.colors[color].DEFAULT.css(),

							"&:after": {
								backgroundColor: config.colors[color].DEFAULT.css(),
							},
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
