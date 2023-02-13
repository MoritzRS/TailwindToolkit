import { Configuration } from "../../utils/types";

export function radios(config: Configuration) {
	return {
		".radio": {
			appearance: "none",
			width: "20px",
			height: "20px",
			flexShrink: "0",
			border: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			borderRadius: "99999999px",
			cursor: "pointer",
			transition: "background, box-shadow .2s ease-in-out",

			"&:focus-visible": {
				outlineOffset: "2px",
				outline: `2px solid ${config.colors.basis.DEFAULT.css()}`,
			},

			"&:checked": {
				backgroundColor: config.colors.basis.DEFAULT.css(),
			},
		},

		...Object.keys(config.colors)
			.map((color) => {
				return {
					[`.radio-${color}`]: {
						borderColor: config.colors[color].DEFAULT.css(),

						"&:checked": {
							backgroundColor: config.colors[color].DEFAULT.css(),
						},
					},
				};
			})
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
