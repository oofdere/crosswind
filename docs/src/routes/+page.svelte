<script lang="ts">
	import '../app.css';
	import demo from '$lib/demo.css.txt?raw';
	import { createTransform } from '$lib/transform.svelte';

	const t = createTransform(demo);
</script>

<div class="flex w-screen h-screen flex-col-reverse md:flex-row">
	<div class="h-full w-full">
		<textarea class="h-full w-full" bind:value={t.input}></textarea>
	</div>
	<div class="h-full w-full flex flex-col">
		{#if t.error}
			<div class="bg-red-700 text-white">
				<p>error: {t.error}</p>
				<hr />
			</div>
		{/if}

		<textarea class="h-full w-full" bind:value={t.code} disabled></textarea>
	</div>
</div>
