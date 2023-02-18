<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Chips</Headline>

	<div class="flex gap-4">
		<span class="chip chip-basis">Base</span>
		<span class="chip chip-primary">Primary</span>
		<span class="chip chip-secondary">Secondary</span>
		<span class="chip chip-accent">Accent</span>
		<span class="chip chip-info">Info</span>
		<span class="chip chip-success">Success</span>
		<span class="chip chip-warning">Warning</span>
		<span class="chip chip-error">Error</span>
	</div>
</template>

<style lang="scss">
</style>
