import { Configuration } from "../../utils/types";

export function infos(config: Configuration) {
	return {
		".info": {
			width: "100%",
			display: "flex",
			alignItems: "baseline",
			justifyContent: "space-between",
			padding: "16px",
			margin: "4px",
			border: `1px solid ${config.colors["basis"].DEFAULT.css()}`,
			borderLeftWidth: "12px",
			borderRadius: "0 4px 4px 0",
			backgroundColor: config.colors["basis"].LIGHT.css(),
		},

		...Object.keys(config.colors)
			.map((color) => ({
				[`.info-${color}`]: {
					borderColor: config.colors[color].DEFAULT.css(),
					backgroundColor: config.colors[color].LIGHT.css(),
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),
	};
}
