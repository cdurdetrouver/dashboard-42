<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	let value: boolean = false;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<SlideToggle name="slide" bind:checked={value} />
	</div>
</div>
