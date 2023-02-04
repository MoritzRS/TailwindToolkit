<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Shadows</Headline>
	<div class="flex flex-wrap items-center justify-center gap-4">
		<div class="flex h-32 w-32 items-center justify-center shadow-none">none</div>
		<div class="flex h-32 w-32 items-center justify-center shadow">default</div>
		<div class="flex h-32 w-32 items-center justify-center shadow-md">md</div>
		<div class="flex h-32 w-32 items-center justify-center shadow-lg">lg</div>
		<div class="flex h-32 w-32 items-center justify-center shadow-xl">xl</div>
		<div class="flex h-32 w-32 items-center justify-center shadow-2xl">2xl</div>
		<div class="shadow-3xl flex h-32 w-32 items-center justify-center">3xl</div>
	</div>
</template>

<style lang="scss">
</style>
