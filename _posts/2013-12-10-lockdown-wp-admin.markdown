---
layout: post
status: publish
published: true
title: Lockdown WP Admin
author: seanfisher
author_login: seanfisher
author_email: hi@seanfisher.co
wordpress_id: 810
wordpress_url: http://seanfisher.co/?page_id=810
date: 2013-12-10 23:58:54.000000000 -05:00
categories: []
tags: []
---
<p style="text-align: left;">WordPress security is often very strong straight out of the box. Though many may say that open-source software is insecure, I beg to differ. Within hours of realizing a security breach in the code, WordPress and mostly <a href="http://twitter.com/nacin">@nacin</a> had updated the code and pushed a security update. That's hours, not days like the big corporate companies (cough Adobe).</p>
Nevertheless, I love to make it even <em>more </em>secure. And I think I have done that. Introducing <a href="http://wordpress.org/extend/plugins/lockdown-wp-admin/" target="_blank">Lockdown WP Admin</a>. It is a neat plugin to help you <em>lock down</em> WordPress's admin interface.

It can do two things, one hide the WordPress admin interface from non logged-in users and provide built in HTTP Authentication. By hiding the WP admin interface, if you access domain.com/wp-admin/, you wouldn't be redirected to the login page if you weren't logged in. Instead, you would recieve a 404 File not Found error.

<img class="alignright" title="HTTP Auth" alt="" src="http://grab.by/grabs/3f9c4ec555386a8c26796ef55fb3a6714e1cf55236.png" width="278" height="289" />

HTTP Authentication is a secure way to provide security to your WordPress install. You can control this in two ways. It can ask for your WordPress login credentials, or you can create your set of custom user/passwords. This way, you can have a double your chances of an unauthorized user from accessing your WordPress admin interface. Over at <a href="http://twitter.com/teensintech">@teensintech</a>, we used this when we have out authors login with their own WordPress credentials and then they must login with another set of username/passwords to be twice as secure. That may not be the best practice possible, but I think it decreases my chance of brute force attack.

You can download the latest version at <a href="http://wordpress.org/extend/plugins/lockdown-wp-admin/">http://wordpress.org/extend/plugins/lockdown-wp-admin/</a>. I'd also love if you can support me and my <a href="http://wordpress.org/extend/plugins/profile/sean212">other plugins</a> by <a href="http://seanfisher.co/donate/">donating</a>!
