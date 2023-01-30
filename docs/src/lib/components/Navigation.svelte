<script lang="ts">
	import { content } from "$lib/data/content";
	import NavigationLink from "./NavigationLink.svelte";
</script>

<template>
	<div class="flex h-full w-full flex-col gap-1 overflow-auto py-4">
		{#each content as { name, pages }}
			<h3 class="pl-4 text-lg font-bold">{name}</h3>
			<div class="flex w-full flex-col gap-1">
				{#each pages as { name, href }}
					<NavigationLink {href}>{name}</NavigationLink>
				{/each}
			</div>
			<hr class="mx-4" />
		{/each}
	</div>
</template>

<style lang="scss">
</style>
