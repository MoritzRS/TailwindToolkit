<script lang="ts">
	import Table from "./Table.svelte";

	export let classes: { name: string; type: string; desc: string }[] = [];
</script>

<template>
	<Table>
		<thead>
			<tr>
				<th class="whitespace-nowrap p-2 text-start">(Prefix-)Class</th>
				<th class="p-2 text-start">Type</th>
				<th class="w-full" />
			</tr>
		</thead>
		<tbody>
			{#each classes as { name, type, desc }}
				<tr>
					<td class="whitespace-nowrap p-2">{name}</td>
					<td class="whitespace-nowrap p-2">
						<span>{type}</span>
					</td>
					<td class="whitespace-normal p-2">{desc}</td>
				</tr>
			{/each}
		</tbody>
	</Table>
</template>

<style lang="scss">
</style>
