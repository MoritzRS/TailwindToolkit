import { Configuration } from "../../utils/types";

export function expandables(config: Configuration) {
	return {
		".expandable": {
			padding: "4px 8px",

			"& summary": {
				listStyle: "none",
				position: "relative",
				paddingRight: "64px",

				"&:after": {
					content: "''",
					position: "absolute",
					width: "8px",
					height: "8px",
					transform: "translateY(-100%) rotate(45deg)",
					top: "50%",
					right: "18px",
					transformOrigin: "75% 75%",
					boxShadow: "2px 2px",
					transition: "transform .25s ease-in-out",
				},
			},

			"&[open] summary:after": {
				transform: "translateY(-100%) rotate(225deg)",
			},

			"& *:not(:first-child)": {
				transition: "all .5s ease-in-out",
				transitionDelay: "1s",
			},

			"&:not([open]) *:not(:first-child)": {
				transform: "scaleY(0)",
			},
			"&[open] *:not(:first-child)": {
				transform: "scaleY(1)",
			},
		},
	};
}
