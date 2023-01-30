import { content, type Page } from "$lib/data/content";

// flatmap content only once
const pages = content.reduce((carry: Page[], current) => {
	carry.push(...current.pages);
	return carry;
}, []);

export function searchContent(search: string) {
	if (search.length < 3) return [];
	search = search.toLowerCase();

	// filter pages by tags
	const candidates = pages.filter((e) => {
		for (let tag of e.tags) {
			if (tag.includes(search)) return true;
			if (search.includes(tag)) return true;
		}
		return false;
	});

	// sort pages
	const results = candidates.sort((a, b) => {
		const nameA = a.name.toLowerCase();
		if (nameA.includes(search)) return -1;
		if (search.includes(nameA)) return -1;

		const nameB = b.name.toLowerCase();
		if (nameB.includes(search)) return 1;
		if (search.includes(nameB)) return 1;

		return 0;
	});

	return results;
}

function getResults(search: string) {
	if (search.length < 3) return [];

	const pages = content.reduce((carry: { href: string; name: string; tags: string[] }[], current) => {
		carry.push(...current.pages);
		return carry;
	}, []);
	return pages
		.filter((e) => {
			for (let tag of e.tags) {
				if (tag.includes(search.toLowerCase())) return true;
				if (search.toLowerCase().includes(tag)) return true;
			}
			return false;
		})
		.sort((a, b) => {
			if (a.name.toLowerCase().includes(search.toLowerCase())) return -1;
			if (search.toLowerCase().includes(a.name.toLowerCase())) return -1;

			if (b.name.toLowerCase().includes(search.toLowerCase())) return 1;
			if (search.toLowerCase().includes(b.name.toLowerCase())) return 1;

			return 0;
		});
}
