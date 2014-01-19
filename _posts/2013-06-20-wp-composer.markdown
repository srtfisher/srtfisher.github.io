---
layout: post
status: publish
published: true
title: ! 'Wrote a new WordPress plugin: wp-composer'
author: seanfisher
author_login: seanfisher
author_email: hi@seanfisher.co
wordpress_id: 727
wordpress_url: http://seanfisher.co/?p=727
date: 2013-06-20 22:18:30.000000000 -04:00
categories:
- php
- tech-post
- WordPress
tags:
- composer
- future
- plugins
- wordpress
---
<img class="size-full wp-image-728" alt="wp-composer" src="http://wp.seanfisher.co/wp-content/uploads/2013/06/banner-772x250-1.png" width="772" height="250" /> WordPress meet Composer.

Recently, I've been working with a lot of different PHP frameworks. Learning from some of the most annoying parts (I'm looking at you Drupal) and some of the best (oh yeah, go Laravel and Symfony!), I always wish some of those good things were including in good-ole&nbsp;<a href="http://wordpress.org/">WordPress</a>. Maybe a man can dream. But I'd love to see some more things happen.

I'm introducing a plugin called <a href="http://wordpress.org/plugins/composer/">wp-composer</a>. It attaches a way to manage <a href="http://getcomposer.org/">Composer</a> dependencies inside of WordPress plugins and themes using <a href="http://wp-cli.org/">WP-CLI</a>. It's a first solid step towards making dependencies inside of plugins handled right from the command line. Why should this even matter?
<h3>Where I think WordPress is going</h3>
WordPress is one of the most valuable pieces of code ever written. Millions of developers and millions of visitors alike have used WordPress and have been somehow affected by it. Even if they don't know it. But since millions have used it, that must mean that the software is a bit older, right? WordPress has a lot of old code thrown in there, though the core developers are always improving it. But they are still forced to support some older code than they should: PHP 5.2.x.

In the future, when they make the jump to at least PHP 5.3.x, you should see some pieces of the puzzle coming in. A more modern code base managed by Composer with the different components separated from WordPress code: wpdb, themes and plugins API, Widget, etc. And with this distributed nature of code, the ability to bend and use WordPress to your liking will change like it never has before.

Maybe one can dream of a modern code base for WordPress. I know it'll come one day and I'd love to be apart of the movement to push for it. This is my start.

<hr />

<strong>Sidenote:&nbsp;</strong>I have recently discovered <a href="http://wpackagist.org/" target="_blank">WordPress Packagist</a>&nbsp;by the guys at&nbsp;<a href="http://outlandishideas.co.uk/" target="_blank">Outlandish Ideas</a>, a way to have WordPress.org plugins as Composer dependecies. It's the best thing since sliced bread. Check it out!
