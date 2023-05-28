<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Scrollbars</Headline>

	<div class="flex w-full flex-wrap">
		<div class="scrollbar scrollbar-light-basis h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-light-primary h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-light-secondary h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-light-accent h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
	</div>

	<hr class="my-4" />

	<div class="bg-basis-900 flex w-full flex-wrap">
		<div class="scrollbar scrollbar-dark-basis h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-dark-primary h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-dark-secondary h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
		<div class="scrollbar scrollbar-dark-accent h-64 w-32 overflow-auto">
			<div class="h-96 w-96" />
		</div>
	</div>
</template>

<style lang="scss">
</style>
