<script lang="ts">
	import Code from "./Code.svelte";

	export let source = "";
	let showCode = false;
</script>

<template>
	<div class="flex w-full flex-col py-4">
		<div class="rounded-t-lg">
			<button type="button" on:click={() => (showCode = false)}>Preview</button>
			<button type="button" on:click={() => (showCode = true)}>HTML</button>
		</div>
		<div class="relative w-full">
			{#if showCode}
				<Code code={source} language="html" />
			{:else}
				<div class="flex w-full flex-wrap items-center justify-center gap-4 rounded-b-lg p-4">
					{@html source}
				</div>
			{/if}
		</div>
	</div>
</template>

<style lang="scss">
</style>
