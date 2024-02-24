<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	onMount(() => {
		if ($page.status === 404) {
			goto('/404');
		}
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Error {$page.status}</h2>
		<!-- Cat Image -->
		<img
			class="w-1/2"
			src="https://http.cat/{$page.status}"
			alt="Error {$page.status}"
		/>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="/"
				rel="noreferrer"
			>
				go back to safety
			</a>
		</div>
		<pre>{JSON.stringify($page, null, 2)}</pre>
	</div>
</div>
