<script lang="ts">
	import type {AutocompleteOption,  PopupSettings, ToastSettings } from '@skeletonlabs/skeleton';
	import { Autocomplete, popup, getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	let inputIntra: string = '';
	let inputIntraError = false;
	let inputDiscord: string = '';
	let inputDiscordError = false;

	/** @type {import('./$types').ActionData} */
	export let form;

	if (form) {
		if (form.success) {
			toastStore.trigger({
				message: form.message,
				timeout: 5000,
				hideDismiss: true,
				background: 'variant-filled-success'
			});
		}
		else {
			if (form.intraerror) {
				inputIntraError = true;
				inputIntra = form.intrauser;
				inputDiscord = form.discorduser;
				toastStore.trigger({
					message: form.intramessage,
					timeout: 5000,
					hideDismiss: true,
					background: 'variant-filled-error'
				});
			}
			if (form.discorderror) {
				inputDiscordError = true;
				inputIntra = form.intrauser;
				inputDiscord = form.discorduser;
				toastStore.trigger({
					message: form.discordmessage,
					timeout: 5000,
					hideDismiss: true,
					background: 'variant-filled-error'
				});
			}
			if (!form.discorderror && !form.intraerror) {
				toastStore.trigger({
					message: form.message,
					timeout: 5000,
					hideDismiss: true,
					background: 'variant-filled-error'
				});
			}
		}
	}

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupDiscord',
		placement: 'bottom'
	};
	type Option = AutocompleteOption<string>;
	const options: Option[] = [];

	export let data;

	let users = JSON.stringify(data.discordusers)

	data.discordusers.forEach((user:any) => {
		options.push({ label: user.username, value: user.id, keywords: user.username});
	});

	function onPopupDemoSelect(event: CustomEvent<Option>): void {
		inputDiscord = event.detail.label;
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<form class="flex flex-row items-center space-x-10" method="POST">
			<input
				class="hidden"
				type="hidde"
				bind:value={users}
				name="users"
			/>
			<input
				class="input {inputIntraError? "input-error" : ""} autocomplete p-4 pb-2 pt-2"
				type="search"
				name="intra-user"
				bind:value={inputIntra}
				on:focus={() => inputIntraError = false}
				placeholder="Search intra..."
			/>
			<input
				class="input {inputDiscordError? "input-error" : ""} autocomplete p-4 pb-2 pt-2"
				type="search"
				name="discord-user"
				bind:value={inputDiscord}
				on:focus={() => inputDiscordError = false}
				placeholder="Search discord..."
				use:popup={popupSettings}
			/>
			<div data-popup="popupDiscord" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
				<Autocomplete
					bind:input={inputDiscord}
					options={options}
					on:selection={onPopupDemoSelect}
				/>
			</div>
			<button class="btn variant-filled" type="submit">Add User</button>
		</form>
	</div>
</div>
