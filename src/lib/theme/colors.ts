import { Configuration } from "../../utils/types";

export function themeColors(config: Configuration) {
	const colors = {};
	for (let color in config.colors) {
		for (let shade in config.colors[color]) {
			if (!parseFloat(shade)) continue;
			const key = `${color}-${shade}`;
			const hsl = config.colors[color][shade]
				.hsl()
				.map((e) => Math.round(e))
				.map((e, i) => (i == 0 ? e : `${e}%`))
				.join(" ");
			colors[key] = `hsl(${hsl} / <alpha-value>)`;
		}
	}
	return {
		...colors,
		white: "#ffffff",
		black: "#000000",
		transparent: "transparent",
		current: "currentColor",
	};
}
