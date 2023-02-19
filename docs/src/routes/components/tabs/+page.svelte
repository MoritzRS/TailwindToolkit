<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Tabs</Headline>

	<div class="tabs">
		<button class="tab tab-active tab-basis">Basis</button>
		<button class="tab tab-active tab-primary">Primary</button>
		<button class="tab tab-active tab-secondary">Secondary</button>
		<button class="tab tab-active tab-accent">Accent</button>
	</div>
</template>

<style lang="scss">
</style>
