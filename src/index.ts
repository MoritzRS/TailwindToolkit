import * as plugin from "tailwindcss/plugin";
import { parser } from "./utils/parser";
import { themeColors } from "./lib/theme/colors";
import { UserConfig } from "./utils/types";

module.exports = function (options: UserConfig) {
	const config = parser(options);
	return plugin(function ({ addBase, addComponents, addUtilities }) {}, {
		theme: {
			extend: {
				colors: themeColors(config),
			},
		},
	});
};
