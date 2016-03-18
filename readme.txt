=== Plugin Name ===
Contributors: DvanKooten
Donate link: https://dannyvankooten.com/donate/
Tags: facebook,posts,fanpage,recent posts,fb,like box alternative,widget,facebook widget,widgets,facebook updates,like button,fb posts
Requires at least: 3.7
Tested up to: 4.2.2
Stable tag: 2.0.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Lists most recent Facebook posts from public Facebook pages. A faster, prettier and more customizable alternative to Facebooks Like Box.

== Description ==

This plugin adds a widget, a shortcode `[recent_facebook_posts]` and a template function `recent_facebook_posts()` to your WordPress website which you can use to list your most recent Facebook posts. This plugin works with public pages and to a certain extent with personal profiles.

= Facebook Posts Widget =
Render a number of most recent Facebook page updates in any of your widget areas using the Recent Facebook Posts widget.

= Facebook Posts Shortcode =
Display a list of your most recent Facebook posts in your posts or pages using the `[recent_facebook_posts]` shortcode. Optionally, specify some arguments to customize the output.

**Features**

* SEO friendly. Your Facebook posts are rendered as plain HTML which means they are indexable by search engines, no frames or JavaScript is used.
* High performance. Facebook posts are cached for a customizable period.
* Customizable. Your Facebook updates will blend in with your theme perfectly and can be easily styled because of smart CSS selectors.
* Easy Configuration, the plugin comes with a comprehensive [installation guide](http://wordpress.org/plugins/recent-facebook-posts/installation/) and [screenshots](http://wordpress.org/plugins/recent-facebook-posts/screenshots/).
* Translation ready!

**Translations**

English (en_US) - [Danny van Kooten](https://dannyvankooten.com/)<br />
Dutch (nl_NL) - [Danny van Kooten](https://dannyvankooten.com/)<br />
Spanish (es_ES) - [Hermann Bravo](http://hbravo.com/)
Swedish (sv_SE) - [Robin Wellström](http://robinwellstrom.se/)
German (de_DE) - [Henrik Heller ](http://www.gmx.net/)
Italian (it_IT) - [Daniele Chianucci](http://frozen.me/)
Turkish (tr_TR) - Halukcan Pehlivanoğlu

_Looking for more translations.._

If you have [created your own language pack](http://codex.wordpress.org/Translating_WordPress), you can send me the language files so that I can bundle it into the Recent Facebook Posts plugin. [You can download the latest POT file here](http://plugins.svn.wordpress.org/recent-facebook-posts/trunk/languages/recent-facebook-posts.pot).

**Other Links**

* [Contribute to the Recent Facebook Posts plugin on GitHub](https://github.com/dannyvankooten/wordpress-recent-facebook-posts)
* Using MailChimp to send out email newsletters? You should [try MailChimp for WordPress](https://wordpress.org/plugins/mailchimp-for-wp/).
* Want an unobtrusive conversion booster? Have a look at the [Scroll Triggered Boxes plugin](https://wordpress.org/plugins/scroll-triggered-boxes/).
* Check out more [WordPress plugins](https://dannyvankooten.com/wordpress-plugins/) by the same author
* Follow [@DannyvanKooten](https://twitter.com/DannyvanKooten) or [@ibericode](https://twitter.com/ibericode) on Twitter.

== Installation ==

= Installing the plugin =
1. [Download the latest version of the plugin](https://downloads.wordpress.org/plugin/recent-facebook-posts.zip)
1. Upload the contents of the downloaded .zip-file to your WordPress plugin directory
1. Activate the plugin through the 'Plugins' menu in WordPress

= Registering a Facebook App =
This plugin requires a Facebook application to fetch posts from Facebook.

1. If you're not a Facebook developer yet, register as one [here](http://developers.facebook.com/apps).
1. [Create a new Facebook application](http://developers.facebook.com/apps). Fill in only the `App Name` field and click `Continue`.

= Configuring the plugin =
1. Go to *Settings > Recent Facebook* posts in your WP Admin panel.
1. Copy and paste your Facebook `App ID/API Key` and `App Secret` into the setting fields.
1. Find the numeric Facebook ID of your public Facebook page using [this website](http://findmyfacebookid.com/).
1. Copy paste the ID in the `Facebook Page ID` field.
1. Add `[recent_facebook_posts]` to the page where you would like to show a list of recent Facebook posts or use the widget.

= Extra notes =
* Take a look at the [screenshots](https://wordpress.org/extend/plugins/recent-facebook-posts/screenshots/), they will tell you which values from Facebook you need.
* The plugin works with personal profiles, but only to a certain extend. I am not actively supporting personal profiles because of many privacy settings related issues.

Ran into an error? Have a look at the [FAQ](https://wordpress.org/plugins/recent-facebook-posts/faq/) for solutions to common problems or [open an issue on GitHub](https://github.com/dannyvankooten/wordpress-recent-facebook-posts/issues).

== Frequently Asked Questions ==

= What does Recent Facebook Posts do? =
With this plugin you can show a list of the most recent Facebook posts of a public page. You can display these posts in pages, posts and widget areas by using a shortcode or widget. Have a look at my [own WordPress website](https://dannyvankooten.com/) for an example, I have a widget with my latest Facebook update in my footer.

= How to configure this plugin? =
You need to create a Facebook application for this plugin to work. Have a **close** look at the [installation instructions](https://wordpress.org/plugins/recent-facebook-posts/installation/).

= No posts are showing.. =
The plugin is only able to fetch posts from **public** pages with posts which are publicly available. Check your page its privacy settings and make sure you are using a page instead of a personal profile or group.

= I want to apply custom styling to the Facebook posts. How do I go about this? =
You can add custom CSS rules to your theme stylesheet. This file is usually located here in `/wp-content/themes/your-theme-name/style.css`.

= Does this plugin work with group posts? =
No, sorry. Recent Facebook Posts works with public pages and to a certain extent with personal profiles.

= Can I show a list of recent facebook updates in my posts or pages? =
Yes, you can use the `[recent_facebook_posts]` shortcode. Optionally, add the following attributes.

`
likes = 1 // show like count, 1 = yes, 0 = no
comments = 1 // show comment count, 1 = yes, 0 = no
excerpt_length = 140 // the number of characters to show from each post
number = 5 // number of posts to show,
show_page_link = 0 // show a link to Facebook page after posts?
el = div // which element to use as a post container?
show_link_previews = 1 // show preview of attached links?
`

*Shortcode example*
`[recent_facebook_posts number=10 likes=1 comments=1 excerpt_length=250 show_page_link=1 show_link_previews=1]`

= Do you have a function I can use in template files? =
Use `<?php recent_facebook_posts(array('likes' => 1, 'excerpt_length => 140')); ?>` in your theme files. The parameter is optional, it can be an array of the same values available for the shortcode.

= How do I change the .. at the end of the excerpt? =
You can change this using a so-called filter. Add the following snippet to your theme its `functions.php` file to change *..* into a link to the Facebook post.

`
function my_rfbp_read_more($more, $link)
{
	return '<a href="'. $link . '">Read more &raquo;</a>';
}

add_filter('rfbp_read_more', 'my_rfbp_read_more', 10, 2);
`

= How do I disable the automatic paragraphs? =
`
remove_filter('rfbp_content', 'wpautop');
`

= How do I add text to all posts? =
`
function my_rfbp_content($content, $link)
{
	return $content . " my appended text.";
}

add_filter('rfbp_content', 'my_rfbp_content', 10, 2);
`

= How do I change the time posts are cached? =
`
function my_rfbp_cache_time($time)
{
	return 3600; // 1 hour
}

add_filter('rfbp_cache_time', 'my_rfbp_cache_time');
`

== Screenshots ==

1. The Recent Facebook Posts settings screen.
2. This is where you'll find your App ID / API Key and App Secret in your [Facebook App Settings](https://developers.facebook.com/apps/).
3. This is where you'll find your Facebook Page Slug on Facebook.com.

== Changelog ==

