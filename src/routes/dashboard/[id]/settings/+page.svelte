<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';

	export let data;

	// console.log(data.channels);
	let value: boolean = data.guild.check;
	let value2: boolean = data.guild.check_failure;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Settings</h2>
		<div class="flex justify-center items-center gap-[10px]">
			<p>Activate :</p>
			<SlideToggle name="slide" bind:checked={value}/>
		</div>
		<p>Message chan id : {data.guild.chanid}</p>
		<p>Message succes: {data.guild.message_succes}</p>
		<div class="flex justify-center items-center gap-[10px]">
			<p>Check failure :</p>
			<SlideToggle name="slide" bind:checked={value2}/>
		</div>
		{#if value2 == false}
			<p class="text-gray-500">Message failure : {data.guild.message_failure}</p>
		{:else}
			<p>Message failure : {data.guild.message_failure}</p>
		{/if}
	</div>
</div>

