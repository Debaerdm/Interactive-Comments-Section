<script lang="ts">
	import { onMount } from 'svelte';

	type ResourceType =
		| 'icon-plus'
		| 'icon-minus'
        | 'icon-reply';

	export let color: string | undefined = undefined;
	export let src: ResourceType;

	let className: string = '';
	export { className as class };

	onMount(async () => {
		const result = await import(`../assets/${src}.svg?raw`);
		element = new DOMParser().parseFromString(
			result.default,
			'image/svg+xml'
		).documentElement;

        if (color) {
		    element.setAttribute('fill', color);
        }

		for (let [key, value] of Object.entries($$restProps)) {
			element.setAttribute(key, value);
		}

		if (!!className && !element.classList.contains(className)) {
			element.classList.add(className);
		}
	});

	$: element = undefined as HTMLElement;
</script>

{#if element}
	{@html element.outerHTML}
{/if}
