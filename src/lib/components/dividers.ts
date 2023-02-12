import { Configuration } from "../../utils/types";

export function dividers(config: Configuration) {
	return {
		".divider": {
			margin: "16px 0",
			height: "16px",
			display: "flex",
			alignItems: "center",
			alignSelf: "stretch",
			whiteSpace: "nowrap",
			border: "none",
			color: config.colors.basis.DEFAULT.css(),

			"&:not(:empty)": {
				gap: "16px",
			},

			"&:before, &:after": {
				content: "''",
				height: "2px",
				width: "100%",
				flexGrow: "1",
				backgroundColor: "currentColor",
			},
		},

		".divider-vertical": {
			height: "auto",
			width: "16px",
			margin: "0 16px",
			flexDirection: "column",

			"&:before, &:after": {
				height: "100%",
				width: "2px",
			},
		},

		".divider-horizontal": {
			width: "auto",
			height: "16px",
			margin: "16px 0",
			flexDirection: "row",

			"&:before, &:after": {
				width: "100%",
				height: "2px",
			},
		},
	};
}
