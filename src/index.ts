import * as plugin from "tailwindcss/plugin";
import { UserConfig } from "./utils/types";
import { badges } from "./lib/components/badges";
import { buttonGroups } from "./lib/components/button-groups";
import { buttons } from "./lib/components/buttons";
import { checkboxes } from "./lib/components/checkboxes";
import { chips } from "./lib/components/chips";
import { dividers } from "./lib/components/dividers";
import { infos } from "./lib/components/infos";
import { inputGroups } from "./lib/components/input-groups";
import { inputs } from "./lib/components/inputs";
import { parser } from "./utils/parser";
import { radios } from "./lib/components/radios";
import { ranges } from "./lib/components/ranges";
import { selects } from "./lib/components/selects";
import { steps } from "./lib/components/steps";
import { tabs } from "./lib/components/tabs";
import { themeColors } from "./lib/theme/colors";
import { themeScreens } from "./lib/theme/screens";
import { themeShadows } from "./lib/theme/shadows";
import { themeSpacings } from "./lib/theme/spacings";
import { toggles } from "./lib/components/toggles";

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
			addComponents(ranges(config));
			addComponents(selects(config));
			addComponents(steps(config));
			addComponents(tabs(config));
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
