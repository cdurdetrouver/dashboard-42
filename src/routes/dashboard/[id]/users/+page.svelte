<script lang="ts">
	// Types
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

	let inputDemo = '';
	let inputDemo2 = '';
	type FlavorOption = AutocompleteOption<string, { healthy: boolean }>;
	const flavorOptions: FlavorOption[] = [
		{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
		{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
		{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
		{ label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
		{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
		{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
	];
	const labels = flavorOptions.map((option) => option.label);

	console.log(labels);

	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputDemo = event.detail.label;
		console.log('onFlavorSelection', inputDemo);
	}

	function onFlavorSelection2(event: CustomEvent<AutocompleteOption<string>>): void {
		inputDemo2 = event.detail.label;
		console.log('onFlavorSelection', inputDemo);
	}

	let value: boolean = false;

	function onSubmit(event: Event): void {
		value = true;
		setTimeout(() => {
			value = false;
		}, 3000);
	}

	function calert(): void {
		console.log('calert');
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<form class="flex flex-row items-center space-x-10" on:submit={onSubmit}>
			<div class="flex flex-col items-center">
				<input class="input pl-4" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />
				<div class="card w-full max-w-sm max-h-48 overflow-y-auto" tabindex="-1">
					<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onFlavorSelection} />
				</div>
			</div>
			<div class="flex flex-col items-center">
				<input class="input pl-4" type="search" name="demo" bind:value={inputDemo2} placeholder="Search..." />
				<div class="card w-full max-w-sm max-h-48 overflow-y-auto" tabindex="-1">
					<Autocomplete bind:input={inputDemo2} options={flavorOptions} on:selection={onFlavorSelection2} />
				</div>
			</div>
			<button class="btn variant-filled">Submit</button>
		</form>
		{#if value}
			<aside class="alert {value}" transition:fade|local={{ duration: 200 }}>
				<i class="fa-solid fa-triangle-exclamation text-4xl" />
				<div class="alert-message" data-toc-ignore>
					<h3 class="h3" data-toc-ignore>Warning</h3>
					<p>ALERT!</p>
				</div>
				<div class="alert-actions">
					<button class="btn variant-filled" on:click={calert}>Action</button>
					<button class="btn-icon variant-filled"><i class="fa-solid fa-xmark" /></button>
				</div>
			</aside>
		{/if}
	</div>
</div>
