import { Color } from "../utils/color";
import { colors } from "./colors";
import { ColorShades, Configuration } from "./types";

/**
 * Parses user configuration
 * @param config User Configuration
 */
export function parser(config: { [key: string]: any }): Configuration {
	// parse colors
	const themeColors: { [key: string]: ColorShades } = {};
	const userColors = typeof config["colors"] == "object" ? config["colors"] : {};
	for (let key in colors) {
		const color = Color.fromCSS(userColors[key] ?? colors[key]);
		const shades: ColorShades = Color.shades(color, 10)
			.reverse()
			.map((color, i) => ({
				[i == 0 ? 50 : i * 100]: color,
			}))
			.reduce((a, b) => ({ ...a, ...b }));
		themeColors[key] = shades;
	}

	return {
		colors: themeColors,
	};
}
