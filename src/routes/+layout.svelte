<script lang="ts">
	import {
		AuthMenu,
		authorizedRoleName,
		HandleRedirectFromAuth,
		hasAccess,
		Header,
		HeaderRight,
		HeaderTitle,
		LoginForm,
		Theme
	} from '@ldn-viz/ui';

	import { oauth_config } from '$lib/auth_config.js';
	$authorizedRoleName = oauth_config.role_name;

	import { base } from '$app/paths';
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
		<HeaderTitle {base}>LDN Viz tools starter template</HeaderTitle>

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
