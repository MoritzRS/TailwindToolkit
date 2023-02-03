import { Config } from "tailwindcss";
import * as plugin from "tailwindcss/plugin";
import { parser } from "./config/parser";
import { colorVariables } from "./lib/base/variables";
import { themeColors } from "./lib/theme/colors";

// module.exports = plugin.withOptions(
// 	function (config: any) {
// 		config = parser(config);
// 		return function ({ addBase, addComponents, addUtilities }) {
// 			addBase(colorVariables(config));
// 		};
// 	},
// 	function (config: any) {
// 		config = parser(config);
// 		return function (): Partial<Config> {
// 			return {
// 				theme: {
// 					colors: {
// 						primary: "#dd2c00",
// 					},
// 				},
// 			};
// 		};
// 	}
// );
module.exports = function (options: any) {
	const config = parser(options);
	return plugin(
		function ({ addBase, addComponents, addUtilities }) {
			addBase(colorVariables(config));
		},
		{
			theme: {
				extend: {
					colors: themeColors(config),
				},
			},
		}
	);
};
