<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Button Groups</Headline>

	<div class="button-group">
		<button class="button button-basis">First</button>
		<button class="button button-basis">Middle</button>
		<button class="button button-basis">Last</button>
	</div>

	<hr class="my-4" />

	<div class="button-group">
		<button class="button button-outlined-basis">First</button>
		<button class="button button-outlined-basis">Middle</button>
		<button class="button button-outlined-basis">Last</button>
	</div>

	<hr class="my-4" />

	<div class="button-group">
		<button class="button button-soft-basis">First</button>
		<button class="button button-soft-basis">Middle</button>
		<button class="button button-soft-basis">Last</button>
	</div>

	<hr class="my-4" />

	<div class="button-group">
		<button class="button button-outlined-basis">First</button>
		<button class="button button-outlined-basis">Last</button>
	</div>
</template>

<style lang="scss"></style>
