# OPAL documentation

The documentation site for [OPAL](https://github.com/amorphous-engineering/OPAL), built with [Starlight](https://starlight.astro.build).

Published at https://amorphous-engineering.github.io/opal-docs/ on each push to `main`.

```bash
pnpm install
pnpm dev       # http://localhost:4321/opal-docs/
pnpm build     # static site in dist/
```

Pages are Markdown files in `src/content/docs/`. The sidebar is in `astro.config.mjs`.
