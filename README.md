---
Title: The project name....
Public: true or false
URL: the URL
Framework: Svelte
Mapping: for most projects this is maplibre
---

# ldn-viz svelte starter template

This starter template can be used to quickly scaffold a [`svelte kit`](https://kit.svelte.dev/) project that uses components from [`ldn-viz-tools`](https://github.com/Greater-London-Authority/ldn-viz-tools).

App name needs to be updated in:

- [ ] `svelte.config.js` (`config.kit.paths.base`)
- [ ] `+page.svelte` (the props of `PageMetadata` and the value of `window.ldnVizCivicAppName`)
- [ ] `layout.svelte` (the `HeaderTitle`)
- [ ] `src/lib/auth_config.ts` (the `app_name` and `role_name`)

The `PUBLIC_POST_LOGIN_URI` and `PUBLIC_REDIRECT_URI` environemt variables also need to be set
by the workflow doing the deployment.

## Pre-launch checklist

- [ ] `svelte.config.js` has been updated with correct URL
- [ ] page title is set
- [ ] `PageMetadata` component is enabled, with appropriate values for its props
- [ ] `AnalyticsAndCookieConsent` component is enabled
- [ ] metadata block at the top of this README has been updated
- [ ] placeholder text in this README that is about the template rather than the app has been deleted
- [ ] unused or commented-out code left over from prototyping has been removed
- [ ] linting has been enabled, and runs without errors
- [ ] components that are re-usable across projects and could be lifted to the component library have been identified
- [ ] repository gives access to users of the `web-apps` group

This checklist can be deleted once it has been completed.

### Notes

- _This starter and the ldn-viz-tools packages are in active development._
- _Please open a pull request for any updates to this template._

### Features

- The template stays pretty close to the default create-svelte setup with:
  - Typescript using typescript syntax,
  - ESLint for code linting
  - Prettier for code formatting
  - Playwright for browser testing
  - Vitest for unit testing
- Tailwindcss is setup
- Components are imported from ldn-viz-tools
- Static build

## Developing

Once you've created a project by clicking 'use this template' and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, a static [adapter](https://kit.svelte.dev/docs/adapters) has been included for our standard target environment.

The !!INSERT YOUR APP NAME HERE!! variable in svelte.config should be updated for your app.
