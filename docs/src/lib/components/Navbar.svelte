<script lang="ts">
	import NavbarDrawerToggle from "./NavbarDrawerToggle.svelte";
	import NavbarSearch from "./NavbarSearch.svelte";
</script>

<template>
	<nav class="fixed top-0 z-50 flex h-16 w-full items-center gap-2 border-b border-black/30 px-4">
		<NavbarDrawerToggle />
		<a href="/" class="font-bold">TailwindToolkit</a>
		<div class="flex-1" />
		<NavbarSearch />
	</nav>
</template>

<style lang="scss">
</style>
