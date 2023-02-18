import { Configuration } from "../../utils/types";

export function inputGroups(config: Configuration) {
	return {
		".input-group": {
			display: "flex",
			alignItems: "stretch",
			justifyContent: "center",

			"& *": {
				flex: "1",
				alignSelf: "stretch",
			},

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
