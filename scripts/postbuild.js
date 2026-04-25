/**
 * Postbuild script — generates static HTML files for each SPA route
 * so that GitHub Pages serves them with HTTP 200 (not 404).
 *
 * Without this, Google sees /portfolio, /blog, /blog/<slug> as 404
 * because GitHub Pages can't find a matching file on disk.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..');
const distDir = join(repoRoot, 'dist');

// Read the built index.html (with hashed asset references)
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8');

// Static routes
const routes = ['portfolio', 'blog'];

// Dynamic blog post routes — import slugs from the source file
const { allBlogSlugs } = await import(
    `file://${join(repoRoot, 'src', 'constants', 'blogPosts.js').replace(/\\/g, '/')}`
);

for (const slug of allBlogSlugs) {
    routes.push(`blog/${slug}`);
}

// Write index.html into each route directory
for (const route of routes) {
    const dir = join(distDir, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), indexHtml);
    console.log(`  ✓ ${route}/index.html`);
}

// Keep 404.html as SPA fallback for unknown routes
copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'));
console.log(`  ✓ 404.html (SPA fallback)`);

console.log(`\n✅ Generated ${routes.length + 1} static HTML files for SEO`);
