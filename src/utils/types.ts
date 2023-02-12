import { Color } from "./color";

export type ColorShades = {
	[key: number]: Color;
	LIGHT: Color;
	DARK: Color;
	DEFAULT: Color;
};

export type Configuration = {
	colors: {
		basis: ColorShades;
		primary: ColorShades;
		secondary: ColorShades;
		accent: ColorShades;
		info: ColorShades;
		success: ColorShades;
		warning: ColorShades;
		error: ColorShades;
		[key: string]: ColorShades;
	};
};

export type UserConfig = {
	colors: {
		[key: string]: string;
	};
};
