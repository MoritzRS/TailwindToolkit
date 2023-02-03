import { Color } from "../utils/color";

export type ColorShades = { [key: number]: Color };

export type Configuration = {
	colors: { [key: string]: ColorShades };
};
