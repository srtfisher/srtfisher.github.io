This is my site
=========

You can see it in action at <http://seanfisher.co/>. It is powered by [Jekyll](http://github.com/mojombo/jekyll) and is transformed into an actual site when I push to GitHub.

Seanfisher.co is a marketing/personal blog site for information about my portfolio and services. Overtime, one can see the changes in copy, design, ideas etc. to build out the site and further sell the brand.

### License
I herby license all content in the `_posts` and `img` directories. You may not reuse anything inside them, all copyrighted by myself.

Everything else is MIT, fair game--use it.

### Prerequisites
Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Jekyll](https://jekyllrb.com/)
- [PHP](http://php.net/) (for building the resume)
- [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html#stable) (for building the resume)

### Building
To build the site, run this:

```bash
# Install npm packages
npm install

# assumes you installed bower
bower install

# assumes you installed grunt
grunt build

# Serve
grunt dev
```

To build the resume:

```bash
grunt resume
```

### Please forgive me...
I hate some things about running Jekyll on GitHub pages. Can't beat the price though. Forgive the fact that I have built and minified assets including in source control.
