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

The site ships to two places from the same `main` branch:

**Staging — GitHub Pages** (`https://djds23.github.io/tanksalot.web/`)
Auto-builds on push to `main` with `_config.yml` only. Enable in repo settings:
**Settings → Pages → Source: Deploy from a branch → `main` / root**. GitHub
Pages can't take a custom build command or a second config, which is why
`_config.yml` holds the GitHub Pages settings (`baseurl: /tanksalot.web`).

**Production — Cloudflare Pages** (custom domain at the root)
Configure the project with:

- **Build command:** `bundle exec jekyll build --config _config.yml,_config.prod.yml`
- **Build output directory:** `_site`

`_config.prod.yml` layers production overrides (`baseurl: ""`, the real `url`)
on top of the base config; later `--config` files win. Ruby is pinned by
`.ruby-version`. If Cloudflare doesn't auto-run `bundle install`, prefix the
command with `bundle install &&`.

Local `jekyll serve` uses `_config.yml`, so it matches staging
(<http://127.0.0.1:4000/tanksalot.web/>). To preview the production build
locally: `bundle exec jekyll serve --config _config.yml,_config.prod.yml`.

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
