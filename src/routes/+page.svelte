<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to <span class="gradient-heading">Marty</span> Dashboard.</h2>
		<!-- Animated Logo -->
		<Avatar
			src="https://cdn.discordapp.com/avatars/1208567625337151488/8a5b43b11d105e326a007074a7c5cff7.jpeg"
			alt="Marty Logo"
			class="w-64 h-64 md:w-80 md:h-80"
		/>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="/dashboard"
				rel="noreferrer"
			>
				go to dashboard
			</a>
		</div>
	</div>
</div>


<style type="postcss">
	.gradient-heading {
		animation: gradient 3s ease infinite;
		@apply bg-clip-text text-transparent box-decoration-clone;
		@apply bg-gradient-to-br;
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>
