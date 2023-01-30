import { page } from "$app/stores";
import { content } from "$lib/data/content";
import { derived } from "svelte/store";

export const contentPage = derived(
	page,
	({ url }) => {
		const path = url.pathname;
		for (let category of content) {
			if (category.pages.find((e) => e.href == path || e.href + "/" == path)) return true;
		}
		return false;
	},
	false
);
