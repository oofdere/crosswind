<script lang="ts" runes="{true}">
	import '../app.css';
	import demo from '$lib/demo.css.txt?raw';
	import { createTransform } from '$lib/transform.svelte';
	import { CodeJar } from 'codejar';
	import { onMount } from 'svelte';
	import { highlighter, codeToHtml } from '$lib';

	const t = createTransform(demo);

	let e: HTMLElement;
	onMount(() => {
		const jar = new CodeJar(e, (editor) => {
			editor.innerHTML = codeToHtml(editor.textContent);
		});
		jar.updateCode(t.input);
		jar.onUpdate(() => {
			t.input = jar.toString();
			console.log(t.input);
		});
	});

	const html = $derived(codeToHtml(t.code));
</script>

<div class="flex w-screen h-screen flex-col-reverse md:flex-row">
	<div class="h-full w-full" bind:this={e}></div>
	<div class="h-full w-full flex flex-col">
		{#if t.error}
			<div class="bg-red-700 text-white">
				<p>error: {t.error}</p>
				<hr />
			</div>
		{/if}
		<div>{@html html}</div>
	</div>
</div>
