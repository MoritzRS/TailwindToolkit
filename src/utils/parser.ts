import { Color } from "./color";
import { ColorShades, Configuration, UserConfig } from "./types";

/**
 * Parses user configuration
 * @param config User Configuration
 */
export function parser(config: UserConfig): Configuration {
	// parse colors
	const themeColors: { [key: string]: ColorShades } = {};
	const baseColors = {
		primary: "hsl(259 94% 51%)",
		secondary: "hsl(314 100% 47%)",
		accent: "hsl(174 60% 50%)",
		info: "hsl(198 93% 60%)",
		success: "hsl(158 64% 52%)",
		warning: "hsl(43 96% 56%)",
		error: "hsl(0 91% 71%)",
		basis: "hsl(215 16% 47%)",
		...(config.colors ?? {}),
	};
	for (let key in baseColors) {
		const color = Color.fromCSS(baseColors[key]);
		const shades = Color.shades(color, 5, 4);
		const colorShades = shades
			.reverse()
			.map((color, i) => ({
				[i == 0 ? 50 : i * 100]: color,
			}))
			.reduce((a, b) => ({ ...a, ...b }));
		colorShades["LIGHT"] = shades[0];
		colorShades["DARK"] = shades[shades.length - 1];
		colorShades["DEFAULT"] = color;
		themeColors[key] = colorShades as ColorShades;
	}

	return {
		colors: themeColors,
	};
}
