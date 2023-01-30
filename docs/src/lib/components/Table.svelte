<script lang="ts">
</script>

<template>
	<table class="my-4 w-full border-2 border-black">
		<slot />
	</table>
</template>

<style lang="scss">
	table {
		:global(thead) {
			@apply border-b-2 border-black;

			:global(th) {
				@apply p-2 text-start;
			}
		}
		:global(tbody) {
			:global(td) {
				@apply p-2;
			}
		}
	}
</style>
