import { Configuration } from "../../utils/types";

export function buttonGroups(config: Configuration) {
	return {
		".button-group": {
			display: "flex",

			"& *:not(:first-child):not(:last-child)": {
				borderRadius: "0",
			},

			"& *:first-child": {
				borderTopRightRadius: "0",
				borderBottomRightRadius: "0",
			},

			"& *:last-child": {
				borderTopLeftRadius: "0",
				borderBottomLeftRadius: "0",
			},
		},
	};
}
