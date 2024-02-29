<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let data;

	let locked: boolean = !data.inguild;

	let name = data.server.name;
	if (data.server.name === undefined) {
		data.servers.forEach((element: { id: string; name: any; }) => {
			if ($page.params.id === element.id) {
				name = element.name;
			}
		});
	}

	function onCompleteHandler(e: Event): void { console.log('event:complete', e); }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to  Marty Dahsboard for {name}.</h2>
		<div class="text-left w-full card p-4 text-token">
			<Stepper on:complete={onCompleteHandler}>
				<Step locked={locked}>
					<svelte:fragment slot="header">Invite the bot</svelte:fragment>
					<p>Before doing anything, you need to invite the bot on your Server</p>
					<aside class="place-holder alert variant-ghost-warning">
						<div class="alert-message">
							<p>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u>{locked ? ' , You should invite it first' : ''}</p>
						</div>
						<div class="alert-actions">
							<a
								class="btn btn-sm variant-filled-primary"
								href="https://discord.com"
								target="_blank"
								rel="noreferrer"
								on:click={() => { locked = false; } }
							>
								Invite
							</a>
						</div>
					</aside>
				</Step>
				<Step>
					<svelte:fragment slot="header">(header)</svelte:fragment>
					(content)
				</Step>
				<Step>
					<svelte:fragment slot="header">(header)</svelte:fragment>
					(content)
				</Step>
				<Step>
					<svelte:fragment slot="header">(header)</svelte:fragment>
					(content)
				</Step>
				<Step>
					<svelte:fragment slot="header">(header)</svelte:fragment>
					(content)
				</Step>
			</Stepper>
		</div>
	</div>
</div>
