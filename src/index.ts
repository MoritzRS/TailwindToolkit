import * as plugin from "tailwindcss/plugin";
import { parser } from "./utils/parser";
import { themeColors } from "./lib/theme/colors";
import { UserConfig } from "./utils/types";
import { themeShadows } from "./lib/theme/shadows";
import { themeSpacings } from "./lib/theme/spacings";
import { themeScreens } from "./lib/theme/screens";
import { buttons } from "./lib/components/buttons";
import { buttonGroups } from "./lib/components/button-groups";
import { dividers } from "./lib/components/dividers";
import { infos } from "./lib/components/infos";
import { checkboxes } from "./lib/components/checkboxes";
import { radios } from "./lib/components/radios";
import { toggles } from "./lib/components/toggles";
import { badges } from "./lib/components/badges";
import { chips } from "./lib/components/chips";
import { inputs } from "./lib/components/inputs";
import { inputGroups } from "./lib/components/input-groups";

module.exports = function (options: UserConfig) {
	const config = parser(options);
	return plugin(
		function ({ addBase, addComponents, addUtilities }) {
			addComponents(badges(config));
			addComponents(buttons(config));
			addComponents(buttonGroups(config));
			addComponents(checkboxes(config));
			addComponents(chips(config));
			addComponents(dividers(config));
			addComponents(infos(config));
			addComponents(inputs(config));
			addComponents(inputGroups(config));
			addComponents(radios(config));
			addComponents(toggles(config));
		},
		{
			corePlugins: {
				boxShadowColor: false,
			},
			theme: {
				extend: {
					screens: themeScreens(),
					spacing: themeSpacings(),
					colors: themeColors(config),
					boxShadow: themeShadows(),
				},
			},
		}
	);
};
