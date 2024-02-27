<script lang="ts">
	import { fade } from 'svelte/transition';


	let inputIntra: string = '';
	let inputDiscord: string = '';

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

	function close(): void {
		value = false;
	}

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<form class="flex flex-row items-center space-x-10" on:submit={onSubmit}>
			<input
				class="input p-4 pb-2 pt-2"
				type="search"
				bind:value={inputIntra}
				placeholder="Search intra..."
			/>
			<input
				class="input p-4 pb-2 pt-2"
				type="search"
				bind:value={inputDiscord}
				placeholder="Search Discord..."
			/>
			<button class="btn variant-filled">Add User</button>
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
					<button class="btn-icon variant-filled" on:click={close}><i class="fa-solid fa-xmark" /></button>
				</div>
			</aside>
		{/if}
	</div>
</div>
