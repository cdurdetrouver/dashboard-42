<script lang="ts">
	import "../app.postcss";
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';

	export let data;

	let isHovering = false;
	let menuTimeout:any;

	function handleMouseOver() {
		clearTimeout(menuTimeout);
		isHovering = true;
	}

	function handleMouseOut() {
		menuTimeout = setTimeout(() => {
			isHovering = false;
		}, 200);
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><span class="gradient-heading"><strong class="text-xl uppercase">Marty</strong></span></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/cdurdetrouver/bot-42"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				{#if !data.user}
					<a
						class="btn btn-sm variant-soft-primary"
						href="/login"
						rel="noreferrer"
					>
						Login
					</a>
				{:else}
					<div
						class="relative inline-block"
						on:mouseover={handleMouseOver}
						on:mouseout={handleMouseOut}
						on:focus={handleMouseOver}
						on:blur={handleMouseOut}
						tabindex="0"
						role="button"
					>
						<Avatar
							src={`https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png?size=1024`}
							alt={data.user.username}
							class="w-9 h-9"
						/>
						{#if isHovering}
							<div class="flex flex-col gap-2 absolute z-10 top-14 right-0 bg-surface-500 p-2 rounded-md shadow-md">
								<a
									class="btn btn-sm variant-soft-primary"
									href="/dashboard"
									rel="noreferrer"
								>
									Dashboard
								</a>
								<a
									class="btn btn-sm variant-soft-warning"
									href="/logout"
									rel="noreferrer"
								>
									Logout
								</a>
							</div>
						{/if}
					</div>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style type="postcss">
	.gradient-heading:hover {
		animation: gradient 3s ease infinite;
		@apply bg-clip-text text-transparent box-decoration-clone;
		@apply bg-gradient-to-br;
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>
