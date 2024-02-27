<script lang="ts">
	import { type TableSource, tableMapperValues, Table } from '@skeletonlabs/skeleton';
	export let data;

	// console.log(data.guild);

	const tableSimple: TableSource = {
		head: ['Intra', 'Discord', 'Last Project'],
		body: tableMapperValues(data.users, ['intra', 'username', 'projectname']),
		meta: tableMapperValues(data.users, ['intra', 'username', 'projectname']),
		foot: ['Total', '', `<code class="code">${data.users.length}</code>`]
	};
</script>

<div class="flex h-[95vh] justify-center items-center overflow-y-hidden">
	<div class="container h-1/2 mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<h2 class="h2">Users List</h2>
			{#if data.users.length === 0}
				<p>No users found</p>
			{:else}
				<Table source={tableSimple} />
			{/if}
		</div>
	</div>
</div>
