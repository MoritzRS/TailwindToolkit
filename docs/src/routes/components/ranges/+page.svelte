<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Ranges</Headline>

	<div class="flex flex-col gap-4">
		<input type="range" class="range" />
		<input type="range" class="range range-primary" />
		<input type="range" class="range range-secondary" />
		<input type="range" class="range range-accent" />
		<input type="range" class="range range-info" />
		<input type="range" class="range range-success" />
		<input type="range" class="range range-warning" />
		<input type="range" class="range range-error" />
	</div>
</template>

<style lang="scss">
</style>
