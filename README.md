# SeanFisher.co

You can see it in action at <https://seanfisher.co/>. It is powered by
[Jekyll](http://github.com/mojombo/jekyll) and is transformed into an actual
site when I push to GitHub via a GitHub action. All compiled assets are kept out
of source control (outside of `gh-pages`).

Seanfisher.co is a marketing/personal blog site for information about me.

## License
I herby license all content in the `_posts` and `img` directories. You may not reuse anything inside them, all copyrighted by myself.

Everything else is MIT, fair game--use it if you want to.

## Setup

The setup is based off of
[oddstronaut/jekyll-starter-tailwind](https://github.com/oddstronaut/jekyll-starter-tailwind).

* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production