---
layout: post
status: publish
published: true
title: Lockdown WP Admin 1.3.1
author: seanfisher
author_login: seanfisher
author_email: hi@seanfisher.co
wordpress_id: 319
wordpress_url: http://talkingwithsean.com/?p=319
date: 2011-03-27 19:59:56.000000000 -04:00
categories:
- Projects
- Web Development
- WordPress
tags:
- ld admin
- opensource
- plugins
- wordpress
---
This release is coming a great new feature. For a while, people have attempted to change their WordPress login URL (the little http://youdomain.com/wp-login.php URL). But it wasn't easy, you had to <em>massively</em> change file names and the core WordPress (a big no-no!) Well, I have made it simple. Introducing Lockdown WP Admin 1.3.1.

You can change the login URL to whatever URL you want it to be. There is no limit. (Well there is, you can't have wp-admin or wp-content but that's understandable!) And once you enable that part of the plugin, you can no longer access wp-login.php directly. It will return a 404, or a file not found. All the URLs and links to it will be rewritten, and if you don't give the URL out, nobody will know your login URL.

If you change the URL to say "login", your login URL page will be http://yourdomain.com/login/.

You can download the updated plugin at&nbsp;<a href="http://wordpress.org/extend/plugins/lockdown-wp-admin/">http://wordpress.org/extend/plugins/lockdown-wp-admin/</a>. Enjoy!

<strong>UPDATE:</strong> I just pushed out 1.3.5. There was an issue with WordPress installs with a non-root location. Thanks!!

&nbsp;
