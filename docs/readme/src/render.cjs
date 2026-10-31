// Re-render: node docs/readme/src/render.cjs   (from the repo root; Playwright must be resolvable, e.g. NODE_PATH=<dir>/node_modules)
const { chromium } = require('playwright');
const { pathToFileURL } = require('node:url');
const { resolve } = require('node:path');
(async () => {
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 640 }, deviceScaleFactor: 1 });
await p.goto(pathToFileURL(resolve('index.html')).href, { waitUntil: 'networkidle' });
await p.screenshot({ path: 'docs/readme/banner.png', clip: { x: 0, y: 0, width: 1600, height: 640 } });
await p.setViewportSize({ width: 1600, height: 460 });
await p.goto(pathToFileURL(resolve('docs/readme/src/flow.html')).href, { waitUntil: 'networkidle' });
await p.screenshot({ path: 'docs/readme/flow.png' });
await b.close();
})();
