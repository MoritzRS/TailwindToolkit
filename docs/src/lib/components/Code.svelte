<script lang="ts">
	import hljs from "highlight.js";
	import "highlight.js/styles/atom-one-dark.css";
	import CodeCopyButton from "./CodeCopyButton.svelte";

	export let name = "";
	export let code = "";
	export let language = "html";

	export function highlight(code: string, language: string) {
		return hljs.highlight(code, { language }).value;
	}
</script>

<template>
	<div class="relative w-full whitespace-pre-wrap rounded-b-lg p-4" class:pt-8={name}>
		<pre><code class="whitespace-pre-wrap">{@html highlight(code, language)}</code></pre>
		{#if name}
			<span class="absolute top-1 left-1 text-xs">{name}</span>
		{/if}
		<CodeCopyButton content={code} />
	</div>
</template>

<style lang="scss">
</style>
