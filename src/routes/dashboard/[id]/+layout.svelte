<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

	if (!$page.params.id) {
        goto('/404');
    }
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a class={$page.route.id === "/dashboard/[id]" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}">Home</a></li>
				<li><a class={$page.route.id === "/dashboard/[id]/users" ? "bg-primary-active-token" : ""} href="/dashboard/{$page.params.id}/users">Users</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<slot />
</AppShell>
