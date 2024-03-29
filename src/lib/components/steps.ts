import { Configuration } from "../../utils/types";

export function steps(config: Configuration) {
	return {
		".steps": {
			display: "inline-grid",
			gridAutoFlow: "column",
			gridAutoColumns: "1fr",
			counterReset: "step",
			overflow: "hidden",
			overflowX: "auto",
		},

		".step": {
			display: "grid",
			gridTemplateColumns: "auto",
			gridTemplateRows: "40px  1fr",
			placeItems: "center",
			textAlign: "center",
			minWidth: "4rem",

			"&:before": {
				content: "''",
				gridColumnStart: "1",
				gridRowStart: "1",
				height: "0.5rem",
				width: "100%",
				marginLeft: "-100%",
				backgroundColor: config.colors.basis.DEFAULT.css(),
			},

			"&:first-child:before": {
				content: "none",
			},

			"&:after": {
				content: "counter(step)",
				counterIncrement: "step",
				zIndex: "1",
				position: "relative",
				gridColumnStart: "1",
				gridRowStart: "1",
				display: "grid",
				width: "2rem",
				height: "2rem",
				placeItems: "center",
				placeSelf: "center",
				borderRadius: "999px",
				backgroundColor: config.colors.basis.DEFAULT.css(),
				color: config.colors.basis.DEFAULT.isDark()
					? config.colors.basis.LIGHT.css()
					: config.colors.basis.DARK.css(),
			},
		},

		/**
		 * Color variations
		 */

		...Object.keys(config.colors)
			.map((color) => ({
				[`.step-${color}`]: {
					"& + &:before": {
						backgroundColor: config.colors[color].DEFAULT.css(),
					},

					"&:after": {
						backgroundColor: config.colors[color].DEFAULT.css(),
						color: config.colors[color].DEFAULT.isDark()
							? config.colors[color].LIGHT.css()
							: config.colors[color].DARK.css(),
					},
				},
			}))
			.reduce((a, b) => ({ ...a, ...b })),

		".steps-vertical": {
			gridAutoRows: "1fr",
			gridAutoFlow: "row",

			".step": {
				display: "grid",
				gap: "0.5rem",
				gridTemplateColumns: "40px 1fr",
				gridTemplateRows: "auto",
				minHeight: "4rem",
				justifyItems: "start",

				"&:before": {
					height: "100%",
					width: "0.5rem",
					transform: "translate(-50%, -50%)",
					marginLeft: "50%",
				},
			},
		},
	};
}
