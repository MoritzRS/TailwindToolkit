import * as plugin from "tailwindcss/plugin";
import { parser } from "./config/parser";
import { themeColors } from "./lib/theme/colors";

module.exports = function (options: any) {
	const config = parser(options);
	return plugin(function ({ addBase, addComponents, addUtilities }) {}, {
		theme: {
			extend: {
				colors: themeColors(config),
			},
		},
	});
};
