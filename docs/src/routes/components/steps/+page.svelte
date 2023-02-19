<script lang="ts">
	import Headline from "$lib/components/Headline.svelte";
</script>

<template>
	<Headline>Steps</Headline>

	<div class="flex flex-col gap-4">
		<ul class="steps">
			<li class="step step-primary">Step Primary</li>
			<li class="step step-primary">Step Primary</li>
			<li class="step step-secondary">Step Secondary</li>
			<li class="step step-secondary">Step Secondary</li>
			<li class="step step-accent">Step Accent</li>
			<li class="step step-accent">Step Accent</li>
		</ul>
		<ul class="steps steps-vertical">
			<li class="step step-primary">Step Primary</li>
			<li class="step step-primary">Step Primary</li>
			<li class="step step-secondary">Step Secondary</li>
			<li class="step step-secondary">Step Secondary</li>
			<li class="step step-accent">Step Accent</li>
			<li class="step step-accent">Step Accent</li>
		</ul>
	</div>
</template>

<style lang="scss">
</style>
