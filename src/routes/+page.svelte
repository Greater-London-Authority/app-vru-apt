<script lang="ts">
	// import { PageMetadata, AnalyticsAndCookieConsent } from '@ldn-viz/ui';

	import { Button, fetchWithAuth } from '@ldn-viz/ui';

	const url = 'https://api2.ldn-gis.co.uk/tables/auth-test/forecast_ward?limit=5';

	let pageData: any[];
	fetchWithAuth(url, {})
		.then((res) => res.json())
		.then((data) => (pageData = data));
</script>

<!--
	TODO: Applies head tag and OpenGraph information on a page-by-page basis.
	TODO: Uncomment and update as needed.
	TODO: All public facing apps should have this.
	<PageMetadata
		title="TODO"
		description="TODO."
		url="https://apps.london.gov.uk/TODO"
		image="https://apps.london.gov.uk/TODO/preview.jpg"
		imageAlt="TODO."
		imageWidth="1200"
		imageHeight="630"
	/>
-->

<!--
	TODO: Applies basic analytics.
	TODO: All apps should have basic analytics.
	TODO: Uncomment and update as needed.
	<svelte:head>
		<script>
			// TODO: Obtain from U&P store or copy from an existing map. 
			window.ldnVizCivicApiKey = 'TODO';
			// TODO: e.g. 'wild-and-free-map'
			window.ldnVizCivicAppName = 'TODO';
		</script>
	</svelte:head>
	<AnalyticsAndCookieConsent />
-->

<!-- Example -->
<div class="container py-16">
	<h1 class="text-xl font-bold mb-8">
		You can delete these components and start building your app
	</h1>
	<div class="w-full md:w-1/2 xl:w-1/3 space-y-4">
		<Button>I am a button</Button>
	</div>
</div>

<!-- using 'dark' modifier -->
<div class="dark bg-color-container-level-1">
	<div class="container py-16">
		<div class="w-full md:w-1/2 xl:w-1/3 space-y-4">
			<Button>I am a button</Button>
		</div>
	</div>
</div>

<div>
	<h2 class="font-bold text-lg">Private content</h2>
	<p>Here is some JSON returned by an API that requires authentication:</p>

	{#if pageData}
		<pre>{JSON.stringify(pageData, null, 2)}</pre>
	{/if}
</div>
