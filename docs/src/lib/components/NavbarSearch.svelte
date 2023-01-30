<script lang="ts">
	import { goto } from "$app/navigation";
	import { searchContent } from "$lib/functions/search";
	import type { Page } from "$lib/data/content";
	import { fade } from "svelte/transition";

	let inputField: HTMLElement;
	let searchString = "";
	let results: Page[] = [];
	let selectedEntry = 0;

	$: {
		results = searchContent(searchString);
		selectedEntry = 0;
	}

	function handleFocusKey(e: KeyboardEvent) {
		if (e.ctrlKey && e.key === "k") inputField?.focus();
	}

	function handleSelection(e: KeyboardEvent) {
		// get Directions
		let movement = 0;
		if (e.key === "ArrowDown" || e.key === "Tab") movement = 1;
		if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) movement = -1;

		if (!movement) return;

		// move
		e.preventDefault();
		selectedEntry += movement;

		// cycle
		if (selectedEntry < 0) selectedEntry = results.length - 1;
		if (selectedEntry >= results.length) selectedEntry = 0;
	}

	function submit() {
		goto(results[selectedEntry].href);
		searchString = "";
	}
</script>

<svelte:window on:keydown={handleFocusKey} />

<template>
	<form on:submit|preventDefault={submit} class="relative">
		<input
			type="search"
			class="z-0 w-full rounded-3xl border-0"
			placeholder="Search (Ctrl+K)"
			bind:this={inputField}
			bind:value={searchString}
			on:keydown={handleSelection}
		/>
		{#if results.length}
			<div
				transition:fade={{ duration: 100 }}
				class="absolute top-full left-0 -z-10 -mt-4 flex w-full flex-col overflow-hidden rounded-b-3xl pt-4 shadow-md"
			>
				{#each results as { name, href }, i}
					<a {href} on:click={() => (searchString = "")}>{name}</a>
				{/each}
			</div>
		{/if}
	</form>
</template>

<style lang="scss">
</style>
