<script>
	import { DataHandler } from '@vincjo/datatables';
	import data from '$lib/components/data';

	const handler = new DataHandler(data, { rowsPerPage: 5 });
	const rows = handler.getRows();
</script>

<div class="table-container space-y-4">
    <table class="table table-hover table-compact table-auto w-full">
        <thead>
            <tr>
                <td>First name</td>
                <td>Last name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
