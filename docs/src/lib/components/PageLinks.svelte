<script lang="ts">
	import { page } from "$app/stores";
	import { content } from "$lib/data/content";
	import { contentPage } from "$lib/stores/contentPage";

	let previous: { name: string; href: string } | null = null;
	let next: { name: string; href: string } | null = null;

	$: {
		const currentPath = $page.url.pathname;
		previous = null;
		next = null;
		for (let cat = 0; cat < content.length; cat++) {
			const currentPage = content[cat].pages.findIndex((e) => e.href == currentPath);
			if (currentPage < 0) continue;

			previous =
				content[cat].pages[currentPage - 1] ??
				content[cat - 1]?.pages[content[cat - 1].pages.length - 1] ??
				null;

			next = content[cat].pages[currentPage + 1] ?? content[cat + 1]?.pages[0] ?? null;
			break;
		}
	}
</script>

<template>
	<div class="flex w-full items-center justify-center md:pl-80">
		{#if $contentPage}
			<div class="flex w-full max-w-5xl items-center border-t-2 px-4 py-8">
				{#if previous}
					<a href={previous.href} class="rounded">
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
							/>
						</svg>
						<div class="flex flex-col">
							<span>Previous</span>
							<span class="font-bold">{previous.name}</span>
						</div>
					</a>
				{/if}
				<div class="flex-1" />
				{#if next}
					<a href={next.href} class="rounded">
						<div class="flex flex-col">
							<span>Next</span>
							<span class="font-bold">{next.name}</span>
						</div>
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
							/>
						</svg>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</template>

<style lang="scss">
</style>
