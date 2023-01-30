<script lang="ts">
	import Content from "$lib/components/Content.svelte";
	import NavigationDrawer from "$lib/components/NavigationDrawer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import PageLinks from "$lib/components/PageLinks.svelte";
	import NavigationSidebar from "$lib/components/NavigationSidebar.svelte";
	import { theme } from "$lib/stores/theme";
</script>

<template>
	<div class="min-h-full w-full" data-theme={$theme}>
		<Navbar />
		<NavigationSidebar />
		<NavigationDrawer />
		<Content>
			<slot />
		</Content>
		<PageLinks />
	</div>
</template>

<style lang="scss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		scroll-behavior: smooth;
		-webkit-tap-highlight-color: transparent;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
