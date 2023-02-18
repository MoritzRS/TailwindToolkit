<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Inputs</Headline>

	<div class="flex flex-wrap gap-4">
		<input type="text" placeholder="Input" class="input input-basis" />
		<input type="text" placeholder="Input" class="input input-primary" />
		<input type="text" placeholder="Input" class="input input-secondary" />
		<input type="text" placeholder="Input" class="input input-accent" />
		<input type="text" placeholder="Input" class="input input-info" />
		<input type="text" placeholder="Input" class="input input-success" />
		<input type="text" placeholder="Input" class="input input-warning" />
		<input type="text" placeholder="Input" class="input input-error" />
	</div>

	<hr class="my-4" />

	<div class="flex flex-wrap gap-4">
		<input type="text" placeholder="Input" class="input input-underlined-basis" />
		<input type="text" placeholder="Input" class="input input-underlined-primary" />
		<input type="text" placeholder="Input" class="input input-underlined-secondary" />
		<input type="text" placeholder="Input" class="input input-underlined-accent" />
		<input type="text" placeholder="Input" class="input input-underlined-info" />
		<input type="text" placeholder="Input" class="input input-underlined-success" />
		<input type="text" placeholder="Input" class="input input-underlined-warning" />
		<input type="text" placeholder="Input" class="input input-underlined-error" />
	</div>

	<hr class="my-4" />

	<div class="flex flex-wrap gap-4">
		<input type="text" placeholder="Input" class="input input-sm" />
		<input type="text" placeholder="Input" class="input input-md" />
		<input type="text" placeholder="Input" class="input input-lg" />
	</div>
</template>

<style lang="scss">
</style>
