import { Configuration } from "../../config/types";

export function themeColors(config: Configuration) {
	const colors = {};
	for (let color in config.colors) {
		for (let shade in config.colors[color]) {
			const key = `${color}-${shade}`;
			colors[key] = `hsl(var(--${key}) / <alpha-value>)`;
		}
	}
	console.log(colors);
	return colors;
}
