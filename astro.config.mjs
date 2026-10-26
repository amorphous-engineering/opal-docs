// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages serves the site from a project path, so every URL starts with the base.
export default defineConfig({
	site: 'https://amorphous-engineering.github.io',
	base: '/opal-docs',
	integrations: [
		starlight({
			title: 'OPAL',
			description: 'Operations, Procedures, Assets, Logistics: a local-first system for hardware teams.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/amorphous-engineering/OPAL' }],
			editLink: { baseUrl: 'https://github.com/amorphous-engineering/opal-docs/edit/main/' },
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Install', slug: 'start/install' },
						{ label: 'Run', slug: 'start/run' },
						{ label: 'Upgrade from 1.x', slug: 'start/upgrade' },
					],
				},
				{
					label: 'Integrations',
					items: [{ label: 'Claude Code (MCP)', slug: 'integrations/mcp' }],
				},
			],
		}),
	],
});
