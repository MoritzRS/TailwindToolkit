<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Radios</Headline>

	<div class="flex gap-4">
		<input type="radio" name="radio" class="radio radio-basis" />
		<input type="radio" name="radio" class="radio radio-primary" />
		<input type="radio" name="radio" class="radio radio-secondary" />
		<input type="radio" name="radio" class="radio radio-accent" />
		<input type="radio" name="radio" class="radio radio-info" />
		<input type="radio" name="radio" class="radio radio-success" />
		<input type="radio" name="radio" class="radio radio-warning" />
		<input type="radio" name="radio" class="radio radio-error" />
	</div>
</template>

<style lang="scss"></style>
