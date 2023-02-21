export class Color {
	/**
	 * Internal Hue [0,360]
	 */
	private hue: number;

	/**
	 * Internal Saturation [0, 100]
	 */
	private saturation: number;

	/**
	 * Internal Lightness [0, 100]
	 */
	private lightness: number;

	/**
	 * Creates new Color Object
	 * @param hue Color Hue [0, 360]
	 * @param saturation Color Saturation [0,100]
	 * @param lightness Color Lightness [0, 100]
	 */
	public constructor(hue: number, saturation: number, lightness: number) {
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
	}

	/**
	 * Creates new Color Object from CSS color
	 * @param css CSS Color as 'rgb(255,255,255)', 'hsl(360, 100, 100)' or '#ffffff'
	 */
	public static fromCSS(css: string) {
		if (css[0] == "#" && css.length == 7) return Color.fromHEX(css);

		const hslRegExp = /^hsl\s*\(\s*([0-9]*)\s*,*\s*([0-9]*)\%?\s*,*\s*([0-9]*)\%?\s*\)/;
		if (hslRegExp.test(css)) {
			const [_, h, s, l] = css.match(hslRegExp);
			return Color.fromHSL(parseFloat(h), parseFloat(s), parseFloat(l));
		}

		const rgbRegExp = /^rgb\s*\(\s*([0-9]*)\%?\s*,*\s*([0-9]*)\%?\s*,*\s*([0-9]*)\%?\s*\)/;
		if (rgbRegExp.test(css)) {
			const [_, r, g, b] = css.match(rgbRegExp);
			return Color.fromRGB(parseFloat(r), parseFloat(g), parseFloat(b));
		}

		return new Color(0, 0, 0);
	}

	/**
	 * Creates new Color from HEX Code
	 * @param hex HEX Code as '#ffffff'
	 */
	public static fromHEX(hex: string) {
		const rgb = this.hexToRGB(hex);
		return new Color(...this.rgbToHsl(...rgb));
	}

	/**
	 * Creates new Color from HSL
	 * @param h Hue [0, 360]
	 * @param s Saturation [0, 100]
	 * @param l Lightness [0, 100]
	 * @returns
	 */
	public static fromHSL(h: number, s: number, l: number) {
		return new Color(h, s, l);
	}

	/**
	 * Creates new Color from RGB
	 * @param r Red [0,255]
	 * @param g Green [0, 255]
	 * @param b Blue [0,255]
	 */
	public static fromRGB(r: number, g: number, b: number) {
		return new Color(...this.rgbToHsl(r, g, b));
	}

	/**
	 * Creates Color Shades by applying base color shades
	 * @param color Base Color
	 * @param lighter Amount of lighter shades
	 * @param darker Amount of darker shades
	 */
	public static shades(color: Color, lighter: number, darker: number) {
		const [h, s, l] = color.hsl();
		const stepsLight = (90 - l) / lighter;
		const stepsDark = (l - 10) / (darker + 1);

		const light = Array(lighter)
			.fill(0)
			.map((_, i) => {
				const lightness = l + (i + 1) * stepsLight;
				return Color.fromHSL(h, s, lightness);
			});

		const dark = Array(darker)
			.fill(0)
			.map((_, i) => {
				const lightness = l - (darker - i) * stepsDark;
				return Color.fromHSL(h, s, lightness);
			});

		return [...dark, color, ...light];
	}

	/**
	 * Generates complementary Colors
	 * @param color Base Color
	 */
	public static complements(color: Color) {
		const steps = [30, 120, 150, 180, 210, 240, 300];
		const [h, s, l] = color.hsl();
		return steps.map((step) => {
			let hue = h + step;
			if (hue > 360) hue -= 360;
			return Color.fromHSL(hue, s, l);
		});
	}

	/**
	 * Perceiced Brightness
	 */
	public brightness(): number {
		const [r, g, b] = Color.hslToRgb(this.hue, this.saturation, this.lightness);
		return Math.sqrt(0.299 * Math.pow(r, 2) + 0.587 * Math.pow(g, 2) + 0.114 * Math.pow(b, 2)) / 255;
	}

	/**
	 * Check if a color is dark
	 */
	public isDark(): boolean {
		return this.brightness() < 0.6;
	}

	/**
	 * Returns css color
	 */
	public css(opacity = 1): string {
		return `hsl(${this.hue} ${this.saturation}% ${this.lightness}% / ${opacity})`;
	}

	/**
	 * Returns colors HSL values.
	 */
	public hsl(): [number, number, number] {
		return [this.hue, this.saturation, this.lightness];
	}

	/**
	 * Returns colors RGB values.
	 */
	public rgb(): [number, number, number] {
		return Color.hslToRgb(this.hue, this.saturation, this.lightness);
	}

	/**
	 * Convert RGB to HSL
	 * @param r Red [0,255]
	 * @param g Green [0,255]
	 * @param b Blue [0,255]
	 */
	private static rgbToHsl(r: number, g: number, b: number): [number, number, number] {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const l = (max + min) / 2;
		if (max == min) return [0, 0, l];
		const delta = max - min;
		const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
		const h =
			max == r
				? ((g - b) / delta + (g < b ? 6 : 0)) / 6
				: max == g
				? ((b - r) / delta + 2) / 6
				: ((r - g) / delta + 4) / 6;
		return [h * 360, s * 100, l * 100];
	}

	/**
	 * Converts HSL to RGB
	 * @param h Hue [0,360]
	 * @param s Saturation [0, 100]
	 * @param l Lightness [0,100]
	 */
	private static hslToRgb(h: number, s: number, l: number): [number, number, number] {
		h /= 360;
		s /= 100;
		l /= 100;

		if (s == 0) return [l * 255, l * 255, l * 255];

		function hue2rgb(p: number, q: number, t: number) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		}

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		const r = hue2rgb(p, q, h + 1 / 3);
		const g = hue2rgb(p, q, h);
		const b = hue2rgb(p, q, h - 1 / 3);
		return [r * 255, g * 255, b * 255];
	}

	/**
	 * Converts HEX Code to RGB
	 * @param hex HEX Code [#ffffff]
	 */
	private static hexToRGB(hex: string): [number, number, number] {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return [r, g, b];
	}
}
