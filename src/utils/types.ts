import { Color } from "./color";

export type ColorShades = { [key: number]: Color; DEFAULT: Color };

export type Configuration = {
	colors: { [key: string]: ColorShades };
};

export type UserConfig = {
	colors: {
		[key: string]: string;
	};
};
