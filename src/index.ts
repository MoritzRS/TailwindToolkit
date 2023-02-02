import * as plugin from "tailwindcss/plugin";

module.exports = plugin.withOptions(
	function (...options) {
		return function ({ addBase, addComponents, addUtilities }) {};
	},
	function (...options) {
		return function () {};
	}
);
