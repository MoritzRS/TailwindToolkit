<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Badges</Headline>

	<div class="flex gap-4">
		<button class="button button-basis">Button</button>
		<span class="badge badge-basis">Base</span>
		<span class="badge badge-primary">Primary</span>
		<span class="badge badge-secondary">Secondary</span>
		<span class="badge badge-accent">Accent</span>
		<span class="badge badge-info">Info</span>
		<span class="badge badge-success">Success</span>
		<span class="badge badge-warning">Warning</span>
		<span class="badge badge-error">Error</span>
	</div>
</template>

<style lang="scss">
</style>
