<script lang="ts">
	import { drawer } from "$lib/stores/drawer";
	import { fade, fly } from "svelte/transition";
	import Navigation from "./Navigation.svelte";
</script>

<template>
	{#if $drawer}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			transition:fade
			on:click|self={drawer.close}
			class="fixed inset-0 z-50 h-full w-full bg-black/30 md:hidden"
		>
			<nav transition:fly={{ x: -200 }} class="h-full w-80">
				<Navigation />
			</nav>
		</div>
	{/if}
</template>

<style lang="scss">
</style>
