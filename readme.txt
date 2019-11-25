=== Insert Special Characters ===
Contributors:  10up, adamsilverstein
Tags: Special Characters, Character Map, Omega, Gutenberg, Block, block editor
Requires at least: 5.2
Tested up to: 5.3
Requires PHP: 5.6
Stable tag: 1.0.2
License: GPLv2
License URI: insert-special-characters.php

A Special Character inserter for the WordPress block editor (Gutenberg).

== Description ==

Ever wanted to add a special character while working within the WordPress block editor (Gutenberg) and suddenly find yourself longing for the days of the Classic Editor and the Special Character inserter? Well long no more, the Insert Special Characters plugin is here to ease your publishing woes!

**Note:** you can display the popover via the `ctrl`/`cmd` + `o` keyboard shortcut.

Development takes place in the [GitHub repository](https://github.com/10up/insert-special-characters).

=== Technical Notes ===

* Requires PHP 5.6+.
* Requires [WordPress](http://wordpress.org/) 5.2+
* Issues and Pull requests welcome in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Screenshots ==

1. Example of inserting a special character.

== Installation ==

1. Install the plugin via the plugin installer, either by searching for it or uploading a .zip file.
2. Activate the plugin.
3. Use Insert Special Characters!

== Changelog ==

= 1.0.2 =
* Changed: Relicensed from MIT to GPLv2
* Fixed: Hook on `enqueue_block_editor_assets` so script is only enqueued in editor (props @adamsilverstein, @josch87)
* Fixed: Register text domain to ensure translations can be loaded (props @ocean90)
* Fixed: Bump WordPress version "tested up to" 5.3 (props @adamsilverstein)
* Fixed: Documentation and credits (props @jeffpaul)

= 1.0.1 =
* Added: Documentation for keyboard shortcut (props @mrwweb, @jeffpaul)
* Fixed: Ensure character map appears as expected in Firefox (props @adamsilverstein)

= 1.0.0 =
Added
* Initial plugin release 🎉
* Wrap [React Character Map](https://github.com/Dayjo/react-character-map) in a Gutenberg Popover (props @adamsilverstein)
* Plugin header and icon images (props @dillonmccallum)
