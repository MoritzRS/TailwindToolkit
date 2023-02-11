<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Buttons</Headline>

	<div class="flex flex-wrap gap-4">
		<button class="button">Default</button>
		<button class="button button-basis">Basis</button>
		<button class="button button-primary">Primary</button>
		<button class="button button-secondary">Secondary</button>
		<button class="button button-accent">Accent</button>
		<button class="button button-info">Info</button>
		<button class="button button-success">Success</button>
		<button class="button button-warning">Warning</button>
		<button class="button button-error">Error</button>
	</div>

	<hr class="my-4"/>

	<div class="flex flex-wrap gap-4">
		<button class="button button-soft-basis">Basis</button>
		<button class="button button-soft-primary">Primary</button>
		<button class="button button-soft-secondary">Secondary</button>
		<button class="button button-soft-accent">Accent</button>
		<button class="button button-soft-info">Info</button>
		<button class="button button-soft-success">Success</button>
		<button class="button button-soft-warning">Warning</button>
		<button class="button button-soft-error">Error</button>
	</div>

	<hr class="my-4"/>

	<div class="flex flex-wrap gap-4">
		<button class="button button-outlined-basis">Basis</button>
		<button class="button button-outlined-primary">Primary</button>
		<button class="button button-outlined-secondary">Secondary</button>
		<button class="button button-outlined-accent">Accent</button>
		<button class="button button-outlined-info">Info</button>
		<button class="button button-outlined-success">Success</button>
		<button class="button button-outlined-warning">Warning</button>
		<button class="button button-outlined-error">Error</button>
	</div>
</template>

<style lang="scss">
</style>
