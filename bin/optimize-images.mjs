#!/usr/bin/env node
// Regenerate the web-optimized images the site actually serves.
//
// Sources (masters, not deployed):
//   _screenshot-src/<name>-<scheme>.png   full-res simulator screenshots (1206x2622)
//   assets/icons/exports/...512x512@1x    app-icon masters (light + dark)
//
// Outputs (committed, served by the site):
//   assets/<name>-<scheme>.webp + .jpg    feature screenshots (1024px tall)
//   assets/hero-icon-<scheme>.webp + .png hero app icon (512px)
//
// GitHub Pages can't run this (Jekyll only), so the outputs are committed.
// After adding or replacing a screenshot in _screenshot-src/, run:
//   npm install && npm run optimize
// then commit the regenerated assets/*.webp and assets/*.jpg.

import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const ROOT = new URL('..', import.meta.url).pathname;
const A = ROOT + 'assets/';
const SRC = ROOT + '_screenshot-src/';

// Screenshots referenced by index.html (tank-detail-* is kept as a source but unused).
const SHOTS = ['lock-screen-live-activity', 'dynamic-island', 'inventory', 'start-session'];
const SCHEMES = ['light', 'dark'];
const SHOT_HEIGHT = 1024; // display max-height is 420px CSS -> ~840px @2x; 1024 covers 2x+ crisply.

const ICON = {
  light: A + 'icons/exports/tanksalot-icon-iOS-Default-512x512@1x.png',
  dark: A + 'icons/exports/tanksalot-icon-iOS-Dark-512x512@1x.png',
};
const ICON_WIDTH = 512; // displayed at 240px; 512 covers 2x.

const kb = (n) => (n / 1024).toFixed(1) + 'K';

let before = 0;
let after = 0;

for (const name of SHOTS) {
  for (const scheme of SCHEMES) {
    const src = `${SRC}${name}-${scheme}.png`;
    const base = sharp(src).resize({ height: SHOT_HEIGHT });
    const webp = await base.clone().webp({ quality: 82 }).toBuffer();
    const jpg = await base.clone().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    await writeFile(`${A}${name}-${scheme}.webp`, webp);
    await writeFile(`${A}${name}-${scheme}.jpg`, jpg);
    after += webp.length;
    console.log(`  ${name}-${scheme}: webp ${kb(webp.length)}  jpg ${kb(jpg.length)}`);
  }
}

for (const scheme of SCHEMES) {
  const base = sharp(ICON[scheme]).resize({ width: ICON_WIDTH });
  const webp = await base.clone().webp({ quality: 90, alphaQuality: 100 }).toBuffer();
  const png = await base.clone().png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer();
  await writeFile(`${A}hero-icon-${scheme}.webp`, webp);
  await writeFile(`${A}hero-icon-${scheme}.png`, png);
  after += webp.length;
  console.log(`  hero-icon-${scheme}: webp ${kb(webp.length)}  png ${kb(png.length)}`);
}

console.log(`\nServed primary (webp) total: ${kb(after)}`);
