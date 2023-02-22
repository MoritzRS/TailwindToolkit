<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Links</Headline>

	<div class="flex flex-wrap gap-4">
		<span class="link link-basis">Basis</span>
		<span class="link link-primary">Primary</span>
		<span class="link link-secondary">Secondary</span>
		<span class="link link-accent">Accent</span>
		<span class="link link-info">Info</span>
		<span class="link link-success">Success</span>
		<span class="link link-warning">Warning</span>
		<span class="link link-error">Error</span>
	</div>
</template>

<style lang="scss">
</style>
