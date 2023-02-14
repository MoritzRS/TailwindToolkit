<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Toggles</Headline>

	<div class="flex gap-4">
		<input type="checkbox" class="toggle toggle-basis" />
		<input type="checkbox" class="toggle toggle-primary" />
		<input type="checkbox" class="toggle toggle-secondary" />
		<input type="checkbox" class="toggle toggle-accent" />
		<input type="checkbox" class="toggle toggle-info" />
		<input type="checkbox" class="toggle toggle-success" />
		<input type="checkbox" class="toggle toggle-warning" />
		<input type="checkbox" class="toggle toggle-error" />
	</div>

	<hr class="my-4" />

	<div class="flex gap-4">
		<input type="checkbox" class="toggle toggle-xs" />
		<input type="checkbox" class="toggle toggle-sm" />
		<input type="checkbox" class="toggle toggle-md" />
		<input type="checkbox" class="toggle toggle-lg" />
		<input type="checkbox" class="toggle toggle-xl" />
	</div>
</template>

<style lang="scss"></style>
