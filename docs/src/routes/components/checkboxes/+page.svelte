<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Checkboxes</Headline>

	<div class="flex gap-4">
		<input type="checkbox" class="checkbox checkbox-basis" checked />
		<input type="checkbox" class="checkbox checkbox-primary" checked />
		<input type="checkbox" class="checkbox checkbox-secondary" checked />
		<input type="checkbox" class="checkbox checkbox-accent" checked />
		<input type="checkbox" class="checkbox checkbox-info" checked />
		<input type="checkbox" class="checkbox checkbox-success" checked />
		<input type="checkbox" class="checkbox checkbox-warning" checked />
		<input type="checkbox" class="checkbox checkbox-error" checked />
	</div>

	<hr class="my-1" />

	<div class="flex gap-4">
		<input type="checkbox" class="checkbox checkbox-basis" checked disabled />
		<input type="checkbox" class="checkbox checkbox-primary" checked disabled />
		<input type="checkbox" class="checkbox checkbox-secondary" checked disabled />
		<input type="checkbox" class="checkbox checkbox-accent" checked disabled />
		<input type="checkbox" class="checkbox checkbox-info" checked disabled />
		<input type="checkbox" class="checkbox checkbox-success" checked disabled />
		<input type="checkbox" class="checkbox checkbox-warning" checked disabled />
		<input type="checkbox" class="checkbox checkbox-error" checked disabled />
	</div>

	<hr class="my-4" />

	<div class="flex gap-4">
		<input type="checkbox" class="checkbox checkbox-sm checkbox-basis" checked />
		<input type="checkbox" class="checkbox checkbox-md checkbox-basis" checked />
		<input type="checkbox" class="checkbox checkbox-lg checkbox-basis" checked />
		<input type="checkbox" class="checkbox checkbox-xl checkbox-basis" checked />
	</div>
</template>

<style lang="scss"></style>
