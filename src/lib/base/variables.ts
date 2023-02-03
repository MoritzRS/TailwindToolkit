import { Configuration } from "../../config/types";

export function colorVariables(config: Configuration) {
	const colors = {};
	for (let color in config.colors) {
		for (let shade in config.colors[color]) {
			colors[`--${color}-${shade}`] = config.colors[color][shade]
				.hsl()
				.map((e) => Math.round(e))
				.map((e, i) => (i > 0 ? `${e}%` : e))
				.join(" ");
		}
	}
	return {
		":root": {
			...colors,
		},
	};
}
