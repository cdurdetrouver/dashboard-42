<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// export let data;

	// console.log(data);
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 border-r-4 border-gray-700">
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<p class="font-bold pl-4 text-2xl">Home</p>
			<ul>
				<li><a class={$page.route.id === "/dashboard/[id]" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}">Start</a></li>
				<li><a class={$page.route.id === "/dashboard/[id]/settings" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}/settings">Settings</a></li>
			</ul>
			<p class="font-bold pl-4 text-2xl">Users</p>
			<ul>
				<li><a class={$page.route.id === "/dashboard/[id]/users" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}/users">Add User</a></li>
				<li><a class={$page.route.id === "/dashboard/[id]/users-list" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}/users-list">List Users</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<slot/>
</AppShell>
