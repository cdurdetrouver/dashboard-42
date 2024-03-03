<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import "../app.postcss";
	import { AppShell, AppBar, Avatar, storePopup, initializeStores, Toast } from '@skeletonlabs/skeleton';
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow,
	} from "@floating-ui/dom";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();

	export let data;

	let isHovering = false;
	let showdiscord = data.user? true : false;
	let menuTimeout:any;

	onMount(() => {
		if (data.user) {
			setInterval(() => {
				showdiscord = !showdiscord;
			}, 15000);
		}
	});

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
						Login Discord
					</a>
				{:else if !data.userintra}
					<a
						class="btn btn-sm variant-soft-primary"
						href="/login_intra"
						rel="noreferrer"
					>
						Login Intra
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
						<div class="relative w-9 h-9">
							{#if showdiscord}
							<div
							in:fade={{ duration: 500 }}
							out:fade={{ duration: 500 }}>
								<Avatar
									src={`https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png?size=1024`}
									alt={data.user.username}
									class="absolute w-9 h-9"
								/>
							</div>
							{:else}
							<div
							in:fade={{ duration: 500 }}
							out:fade={{ duration: 500 }}>
								<Avatar
									src={data.userintra.avatar}
									alt={data.userintra.username}
									class="absolute w-9 h-9"
								/>
							</div>
							{/if}
						</div>
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
									Logout Discord
								</a>
								<a
									class="btn btn-sm variant-soft-warning"
									href="/logout_intra"
									rel="noreferrer"
								>
									Logout Intra
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
	<Toast />
</AppShell>

<style type="postcss">
	.gradient-heading:hover {
		animation: gradient 3s ease infinite;
		@apply bg-clip-text text-transparent box-decoration-clone;
		@apply bg-gradient-to-br;
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>
