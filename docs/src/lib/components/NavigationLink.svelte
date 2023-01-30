<script lang="ts">
	import { page } from "$app/stores";
	import { drawer } from "$lib/stores/drawer";

	export let href = "";

	$: active = href == $page.url.pathname || href + "/" == $page.url.pathname;
</script>

<template>
	<a on:click={drawer.close} {href} class="px-4 py-3 pl-12">
		<slot />
	</a>
</template>

<style lang="scss">
</style>
