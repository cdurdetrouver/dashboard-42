<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;

	const user = data.user;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		{#if !data.connexion}
			<h2 class="h2">Before start using the dashboard you should login to discord.</h2>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled"
					href="https://discord.com/oauth2/authorize?client_id=1208567625337151488&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&scope=identify+guilds"
					rel="noreferrer"
				>
					Login
				</a>
			</div>
		{:else}
			<Avatar
				src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`}
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
