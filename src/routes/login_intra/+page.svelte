<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;

	const user = data.userintra;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		{#if !data.connexion}
			<h2 class="h2">Before start using the dashboard you should login to 42 intra.</h2>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled"
					href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-ec6fede3af09fc4668fad541b315d62858d4e25bec275ec0ab34ac69b58014e4&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin_intra&response_type=code"
					rel="noreferrer"
				>
					Login
				</a>
			</div>
		{:else}
			<Avatar
				src={user.avatar}
				alt="User avatar"
				class="w-64 h-64 md:w-80 md:h-80"
			/>
			<h2 class="h2">Welcome {user.username}</h2>
			<h2 class="h2">You can use the dashboard</h2>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled"
					href="/dashboard"
					rel="noreferrer"
				>
					Go to dashboard
				</a>
			</div>
		{/if}

	</div>
</div>
