---
layout: blog
status: publish
published: true
title: Lockdown WP Admin
categories: []
tags: []
---

WordPress security is often very strong straight out of the box. Though many may say that open-source software is insecure, I beg to differ. Within hours of realizing a security breach in the code, WordPress and mostly <a href="http://twitter.com/nacin">@nacin</a> had updated the code and pushed a security update. That's in *hours*.

Nevertheless, I love to make it even <em>more </em>secure. And I think I have done that. Introducing <a href="http://wordpress.org/extend/plugins/lockdown-wp-admin/" target="_blank">Lockdown WP Admin</a>. It is a neat plugin to help you <em>lock down</em> WordPress's admin interface.

It can do two things, one hide the WordPress admin interface from non logged-in users and provide built in HTTP Authentication. By hiding the WP admin interface, if you access domain.com/wp-admin/, you wouldn't be redirected to the login page if you weren't logged in. Instead, you would recieve a 404 File not Found error.

HTTP Authentication is a secure way to provide security to your WordPress install. You can control this in two ways. It can ask for your WordPress login credentials, or you can create your set of custom user/passwords. This way, you can have a double your chances of an unauthorized user from accessing your WordPress admin interface.

You can download the latest version [here](https://wordpress.org/plugins/lockdown-wp-admin/).