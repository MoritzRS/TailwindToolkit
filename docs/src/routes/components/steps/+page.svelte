<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Steps</Headline>

	<div class="flex flex-col gap-4">
		<ul class="steps">
			<li class="step step-basis">Step</li>
			<li class="step step-primary">Step</li>
			<li class="step step-secondary">Step</li>
			<li class="step step-accent">Step</li>
			<li class="step step-info">Step</li>
			<li class="step step-success">Step</li>
			<li class="step step-warning">Step</li>
			<li class="step step-error">Step</li>
		</ul>
		<ul class="steps steps-vertical">
			<li class="step step-basis">Step</li>
			<li class="step step-primary">Step</li>
			<li class="step step-secondary">Step</li>
			<li class="step step-accent">Step</li>
			<li class="step step-info">Step</li>
			<li class="step step-success">Step</li>
			<li class="step step-warning">Step</li>
			<li class="step step-error">Step</li>
		</ul>
	</div>
</template>

<style lang="scss">
</style>
