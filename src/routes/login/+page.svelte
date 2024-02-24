<script lang="ts">
	import { goto } from '$app/navigation';

	const discordconnexion = false;

	if (discordconnexion) {
		goto('/dashboard');
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Before start using the dashboard you should login to discord.</h2>
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="/login"
				rel="noreferrer"
			>
				Login
			</a>
		</div>
	</div>
</div>
