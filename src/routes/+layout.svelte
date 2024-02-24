<script lang="ts">
	import "../app.postcss";
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="h-[5vh]">
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
				<a
					class="btn btn-sm variant-soft-primary"
					href="/login"
					rel="noreferrer"
				>
					Login
				</a>
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
