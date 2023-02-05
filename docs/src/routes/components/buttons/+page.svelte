<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Buttons</Headline>

	<div class="flex flex-wrap gap-4">
		<button class="btn shadow">Default</button>
		<button class="btn btn-basis shadow">Basis</button>
		<button class="btn btn-primary shadow">Primary</button>
		<button class="btn btn-secondary shadow">Secondary</button>
		<button class="btn btn-accent shadow">Accent</button>
		<button class="btn btn-info shadow">Info</button>
		<button class="btn btn-success shadow">Success</button>
		<button class="btn btn-warning shadow">Warning</button>
		<button class="btn btn-error shadow">Error</button>
	</div>
</template>

<style lang="scss">
</style>
