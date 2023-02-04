<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Colors</Headline>

	<div class="text-2xl font-bold">Standard Colors</div>
	<div class="flex w-full">
		<div class="flex h-16 flex-1 items-center justify-center bg-white">White</div>
		<div class="flex h-16 flex-1 items-center justify-center bg-black text-white">Black</div>
	</div>

	<div class="text-2xl font-bold">Basis</div>
	<div class="flex w-full">
		<div class="bg-basis-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-basis-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-basis-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-basis-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-basis-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-basis-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-basis-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-basis-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-basis-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-basis-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Primary</div>
	<div class="flex w-full">
		<div class="bg-primary-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-primary-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-primary-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-primary-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-primary-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-primary-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-primary-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-primary-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-primary-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-primary-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Secondary</div>
	<div class="flex w-full">
		<div class="bg-secondary-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-secondary-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-secondary-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-secondary-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-secondary-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-secondary-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-secondary-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-secondary-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-secondary-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-secondary-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Accent</div>
	<div class="flex w-full">
		<div class="bg-accent-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-accent-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-accent-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-accent-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-accent-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-accent-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-accent-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-accent-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-accent-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-accent-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Info</div>
	<div class="flex w-full">
		<div class="bg-info-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-info-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-info-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-info-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-info-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-info-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-info-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-info-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-info-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-info-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Success</div>
	<div class="flex w-full">
		<div class="bg-success-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-success-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-success-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-success-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-success-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-success-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-success-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-success-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-success-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-success-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Warning</div>
	<div class="flex w-full">
		<div class="bg-warning-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-warning-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-warning-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-warning-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-warning-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-warning-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-warning-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-warning-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-warning-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-warning-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>

	<div class="text-2xl font-bold">Error</div>
	<div class="flex w-full">
		<div class="bg-error-50  flex h-16 flex-1 items-center justify-center">50</div>
		<div class="bg-error-100  flex h-16 flex-1 items-center justify-center">100</div>
		<div class="bg-error-200  flex h-16 flex-1 items-center justify-center">200</div>
		<div class="bg-error-300  flex h-16 flex-1 items-center justify-center">300</div>
		<div class="bg-error-400  flex h-16 flex-1 items-center justify-center">400</div>
		<div class="bg-error-500  flex h-16 flex-1 items-center justify-center">500</div>
		<div class="bg-error-600  flex h-16 flex-1 items-center justify-center">600</div>
		<div class="bg-error-700  flex h-16 flex-1 items-center justify-center">700</div>
		<div class="bg-error-800  flex h-16 flex-1 items-center justify-center">800</div>
		<div class="bg-error-900  flex h-16 flex-1 items-center justify-center">900</div>
	</div>
</template>

<style lang="scss">
</style>
