# Personal Website

This is a Next.js portfolio website configured for static export and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## GitHub Pages

This project is configured for a static export, which is the recommended way to host a Next.js app on GitHub Pages.

### If you are deploying to a project site

Set this environment variable before building:

```bash
NEXT_PUBLIC_BASE_PATH=/lukebirch.github.io
npm run build
```

### If you are deploying to your root GitHub Pages domain

For a repo named `lukebirch.github.io`, the site is typically served from the root path, so no base path is needed.

## GitHub Actions deployment

A deployment workflow is recommended for automatic publishing. The app exports a static bundle to the `out` directory.

After pushing to GitHub:

1. Go to the repository settings
2. Open Pages
3. Set the source to GitHub Actions
4. Push changes and let the workflow publish the site

## Important notes

- `output: "export"` is enabled in `next.config.ts`
- images are set to `unoptimized` for GitHub Pages compatibility
- the app exports static HTML and assets to the `out/` folder
