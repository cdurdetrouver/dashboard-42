<script lang="ts">
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let data;

	const elems = data.data;

</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-[10rem] p-4 overflow-y-auto h-[95vh]">
	<!-- Choose Server -->
	<svelte:fragment slot="sidebarLeft">
		<!-- list of server -->
		<nav class="list-nav">
			<ul>
				{#each elems as elem}
					<li class="pb-2.5">
						<a href="/dashboard/{elem.id}" class={$page.params.id === elem.id ? 'bg-primary-active-token' : ''}>
							<Avatar
								src="https://raw.githubusercontent.com/ayogun/42-project-badges/main/badges/{elem.image}e.png"
								alt="server {elem.id}"
								class="w-20 h-20 hover:rounded-3xl"
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
