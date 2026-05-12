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

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000/tanksalot.web/>.

## Deploying

GitHub Pages auto-builds on push to `main`. Enable Pages in repo settings:
**Settings → Pages → Source: Deploy from a branch → `main` / root**.

## Adding screenshots

Drop PNGs into `assets/screenshots/` and replace the dashed placeholders in
`index.html` (look for `class="shot"`) with `<img>` tags pointing at the new
files.

## Things tracked elsewhere

- App Store Connect URLs are set in Linear ticket SIL-48.
- Brand green is defined as CSS custom properties in `assets/style.css`
  (`--brand: #1f9d55`); update there if the app's accent color changes.
- TestFlight invite URL is the `testflight_url` key in `_config.yml`;
  currently set to `#` until a public invite link exists.
