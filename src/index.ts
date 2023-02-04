import * as plugin from "tailwindcss/plugin";
import { parser } from "./utils/parser";
import { themeColors } from "./lib/theme/colors";
import { UserConfig } from "./utils/types";
import { themeShadows } from "./lib/theme/shadows";
import { themeSpacings } from "./lib/theme/spacings";
import { themeScreens } from "./lib/theme/screens";

module.exports = function (options: UserConfig) {
	const config = parser(options);
	return plugin(function ({ addBase, addComponents, addUtilities }) {}, {
		theme: {
			extend: {
				screens: themeScreens(),
				spacing: themeSpacings(),
				colors: themeColors(config),
				boxShadow: themeShadows(),
			},
		},
	});
};
