source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
    # Gemfile
  # Add platform-specific gems
  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
  gem 'listen', '>= 3.0.5', '< 3.2' unless Gem.win_platform?
  
  # Add logger, csv, and ostruct gems to silence warnings
  gem 'logger'
  gem 'csv'
  gem 'ostruct'
  gem "jekyll-paginate"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end
