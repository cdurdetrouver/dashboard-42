<script lang="ts">
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let data;

	const elems = data.servers;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-[10rem] p-4 overflow-y-auto h-[95vh] border-r-4 border-gray-700">
	<!-- Choose Server -->
	<svelte:fragment slot="sidebarLeft">
		<!-- list of server -->
		<nav>
			<ul class="flex flex-col items-center gap-5 w-full">
				{#each elems as elem}
					<li class="pb-2.5">
						<a href="/dashboard/{elem.id}" class="hover:bg">
							<Avatar
								src="https://cdn.discordapp.com/icons/{elem.id}/{elem.icon}.png"
								alt="server {elem.id}"
								class="w-20 h-20 border-white {$page.params.id === elem.id ? 'border-4' : 'hover:rounded-3xl hover:border-2 '}"
								rounded={$page.params.id === elem.id ? 'rounded-3xl' : 'rounded-full'}
							/>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<slot />
</AppShell>
