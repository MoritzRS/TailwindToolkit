import { writable } from "svelte/store";

export const drawer = (() => {
	const { set, update, subscribe } = writable(false);

	const open = () => set(true);
	const close = () => set(false);

	return {
		set,
		update,
		subscribe,
		open,
		close,
	};
})();
