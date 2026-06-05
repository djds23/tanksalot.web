# tanksalot.web

Marketing site and privacy policy for the [tanksalot](https://github.com/djds23/tanksalot) iOS app.

Published via GitHub Pages from `main` branch root: <https://djds23.github.io/tanksalot.web/>.

## Structure

- `index.html` — landing page
- `support.md` — FAQ + contact (App Store Connect Support URL)
- `privacy.md` — privacy policy (App Store Connect Privacy Policy URL)
- `_layouts/default.html` — single shared layout
- `assets/style.css` — minimal hand-written CSS, brand green
- `_config.yml` — site config
- `_screenshot-src/` — full-res screenshot masters (not deployed; source for the
  optimized images the site serves)
- `bin/optimize-images.mjs` — regenerates the served WebP/JPEG/PNG from the masters

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000/tanksalot.web/>.

## Deploying

GitHub Pages auto-builds on push to `main`. Enable Pages in repo settings:
**Settings → Pages → Source: Deploy from a branch → `main` / root**.

## Images

The page is mostly screenshots, so they're optimized aggressively. Full-res
simulator exports live in `_screenshot-src/` (underscore-prefixed, so Jekyll
never deploys them). The site serves resized **WebP** with a JPEG/PNG fallback,
generated from those masters and committed under `assets/`.

GitHub Pages runs Jekyll only — it can't run the optimizer — so the generated
images are committed, not built on deploy.

### Adding or replacing a screenshot

1. Drop the full-res PNG into `_screenshot-src/` as `<name>-light.png` /
   `<name>-dark.png`.
2. Add it to the `SHOTS` list in `bin/optimize-images.mjs`.
3. Regenerate and commit the outputs:

   ```sh
   npm install        # one-time; installs sharp (devDependency, git-ignored)
   npm run optimize   # writes assets/<name>-<scheme>.webp + .jpg
   ```

4. Add a `<picture>` block in `index.html` (copy an existing `class="shot"`
   block): WebP `<source>` first, then a JPEG/PNG fallback, then the `<img>`.

The hero app icon follows the same pattern (`hero-icon-*`), sourced from the
512×512 icon masters in `assets/icons/exports/`.

## Things tracked elsewhere

- App Store Connect URLs are set in Linear ticket SIL-48.
- Brand green is defined as CSS custom properties in `assets/style.css`
  (`--brand: #1f9d55`); update there if the app's accent color changes.
- TestFlight invite URL is the `testflight_url` key in `_config.yml`;
  currently set to `#` until a public invite link exists.
