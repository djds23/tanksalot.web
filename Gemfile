source "https://rubygems.org"

# Modern Jekyll for the self-hosted (Cloudflare) build. Uses dart-sass via
# jekyll-sass-converter 3, not the EOL Ruby `sass` gem that the github-pages
# gem pins (which breaks on Ruby 3.3). The site has no .scss, so Sass never
# runs anyway. GitHub Pages staging builds with its own internal github-pages
# environment and ignores this Gemfile.
gem "jekyll", "~> 4.3"
gem "webrick" # required for `jekyll serve` on Ruby 3+
