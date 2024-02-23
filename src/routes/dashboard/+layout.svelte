<script lang="ts">
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const data = {
		"libft": "libft",
		"printf": "ft_printf",
		"get": "get_next_line",
		"cub3d": "cub3d",
		"minishell": "minishell",
		"philo": "philosophers",
		"push": "push_swap",
		"long": "so_long",
		"fdf": "fdf",
		"fract": "fract-ol",
		"born2beroot": "born2beroot",
		"transcendence": "ft_transcendence",
		"minirt": "minirt",
		"pipex": "pipex",
		"webserv": "webserv",
		"netpractice": "netpractice",
		"minitalk": "minitalk",
		"irc": "ft_irc",
		"inception": "inception"
	};

	const ids = Object.entries(data).map(([id, image]) => ({ id, image }));

</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-[10rem] p-4 overflow-y-auto h-[95vh]">
	<!-- Choose Server -->
	<svelte:fragment slot="sidebarLeft">
		<!-- list of server -->
		<nav class="list-nav">
			<ul>
				{#each ids as id}
					<li class="pb-2.5">
						<a href="/dashboard/{id.id}" class={$page.params.id === id.id ? 'bg-primary-active-token' : ''}>
							<Avatar
								src="https://raw.githubusercontent.com/ayogun/42-project-badges/main/badges/{id.image}e.png"
								alt="server {id.id}"
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
