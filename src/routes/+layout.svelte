<script lang="ts">
	import {
		AuthMenu,
		authorizedRoleName,
		HandleRedirectFromAuth,
		hasAccess,
		Header,
		HeaderItem,
		HeaderRight,
		HeaderTitle,
		LoginForm,
		NavLink,
		Theme
	} from '@ldn-viz/ui';

	import { oauth_config } from '$lib/auth_config.js';
	$authorizedRoleName = oauth_config.role_name;

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
		rel="stylesheet"
		crossorigin="anonymous"
	/>
</svelte:head>

<HandleRedirectFromAuth config={oauth_config} />

<Theme />

<div class="min-h-screen flex flex-col">
	<Header>
		<HeaderTitle {base}>VRU APT</HeaderTitle>

		<HeaderItem>
			<nav class="flex space-x-6">
				<NavLink target="">Home</NavLink>
				<NavLink target="overview">Overview</NavLink>
				<NavLink target="wards">Ward Profiles</NavLink>
			</nav>
		</HeaderItem>

		<HeaderRight>
			<AuthMenu config={oauth_config} />
		</HeaderRight>
	</Header>

	{#if $hasAccess}
		<slot />
	{:else}
		<LoginForm config={oauth_config} />
	{/if}
</div>
