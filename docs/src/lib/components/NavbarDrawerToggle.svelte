<script lang="ts">
	import { drawer } from "$lib/stores/drawer";
</script>

<template>
	<button on:click={drawer.open} type="button" class="flex items-center justify-center md:hidden">
		<svg style="width:24px;height:24px" viewBox="0 0 24 24">
			<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
		</svg>
	</button>
</template>

<style lang="scss">
</style>
