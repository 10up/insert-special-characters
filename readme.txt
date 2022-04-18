=== Insert Special Characters ===
Contributors:      10up, adamsilverstein
Tags:              Special Characters, Character Map, Omega, Gutenberg, Block, block editor
Requires at least: 5.4
Tested up to:      5.9
Stable tag:        1.0.4
Requires PHP:      5.6
License:           GPLv2
License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

A Special Character inserter for the WordPress block editor (Gutenberg).

== Description ==

Ever wanted to add a special character while working within the WordPress block editor (Gutenberg) and suddenly find yourself longing for the days of the Classic Editor and the Special Character inserter? Well long no more, the Insert Special Characters plugin is here to ease your publishing woes!

**Note:** you can display the popover via the `ctrl`/`cmd` + `o` keyboard shortcut.

https://media.giphy.com/media/ImJtBjUD0RQqjdJkHv/giphy.mp4

Development takes place in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Technical Notes ==

* Requires PHP 5.6+.
* Requires [WordPress](http://wordpress.org/) 5.2+
* Issues and Pull requests welcome in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Installation ==

1. Install the plugin via the plugin installer, either by searching for it or uploading a .zip file.
2. Activate the plugin.
3. Use Insert Special Characters!

== Extending ==

To control the available tabs and characters, developers can filter the data set using the `insertspecialcharacters-characters` JavaScript (`wp.hooks`) filter.

For example, to create a character inserter that only provides currency symbols:

`
wp.hooks.addFilter(
	'insertspecialcharacters-characters',  // The filter name.
	'mycallback', // Our callback namespace.
	function( component ) { // The callback function.

		// Return the categories/characters to display.
		// The data structure is: { category: [ character data ], category2: ... }
		return {
			"Currency": [
				{ "entity": "&dollar;", "hex": "&#0024;", "name": "Dollar Sign", "char": "$" },
				{ "entity": "&euro;", "hex": "&#20AC;", "name": "Euro Sign", "char": "€" },
				{ "entity": "&cent;", "hex": "&#00A2;", "name": "Cent Sign", "char": "¢" },
				{ "entity": "&pound;", "hex": "&#00A3;", "name": "Pound Sign", "char": "£" },
				{ "entity": "&yen;", "hex": "&#00A5;", "name": "Yen Sign", "char": "¥" },
			]
		};
	}
);
`

== Frequently Asked Questions ==

= How come I do not see all the special characters? =

When a character is displayed using a font that doesn't support that character, a default "not defined" glyph from that font is used. The "not defined" glyph in most fonts has the appearance of a rectangular box, or some variation of that.

One example of a font with support for wide range of glyphs is the [Noto](https://fonts.google.com/noto) family by Google Fonts, which can be loaded by the theme to render the missing characters.

== Screenshots ==

1. "Special Characters" option in Paragraph Block menu.
2. Initial special characters, showing the "Math" character set.
3. Filtering the special characters via search.
4. Resulting inserted special character (note focus on special character, rest of window has been blurred).

== Changelog ==

= 1.0.4 =
* **Added:** Many new special characters (e.g., ⅐, ⅑, ⅒, single quotation marks, ß, ẞ, Ć, ć, Ḉ, ḉ) and grouping (Music) (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Added:** Issue management automation and CodeQL analysis via GitHub Actions (props [@jeffpaul](https://github.com/jeffpaul), [@cadic](https://github.com/cadic)).
* **Changed:** Move icon from dropdown to block format toolbar (props [@pabamato](https://github.com/pabamato), [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9), [@mahnunchik](https://github.com/mahnunchik)).
* **Changed:** Updated `react-character-map` from 0.4.2 to 0.4.4 (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Changed:** Bump WordPress "tested up to" version 5.9 (props [@cadic](https://github.com/cadic), [@sudip-10up](https://github.com/sudip-10up)).
* **Changed:** Documentation updates (props [@faisal-alvi](https://github.com/faisal-alvi), [@sudip-10up](https://github.com/sudip-10up)).
* **Fixed:** Character map popover scrolling issue on mobile viewport (props [@ajmaurya99](https://github.com/ajmaurya99), [@Sidsector9](https://github.com/Sidsector9), [@adamsilverstein](https://github.com/adamsilverstein), [@helen](https://github.com/helen)).

= 1.0.3 =
* **Added:** Many new special characters (e.g., em dash, en dash, hair space, thin space, no-break space, en space, em space, zero width non-joiner, non-breaking hyphen) and groupings (Currency, Punctuation, Greek).
* **Added:** Focus style on buttons to improve accessibility for keyboard users (props [@samikeijonen](https://profiles.wordpress.org/samikeijonen/)).
* **Added:** WP Acceptance tests (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Update to React Character Map `v0.4.2` (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@dinhtungdu](https://profiles.wordpress.org/dinhtungdu/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Integrate [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for building and linting (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@ocean90](https://profiles.wordpress.org/ocean90/), [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Changed:** Renamed release branch from `master` to `trunk`, so please make sure to update and direct references to `master` in downstream code (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Bump WordPress version "tested up to" 5.8 (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/), [@davidchabbi](https://profiles.wordpress.org/davidchabbi/), [@pabamato](https://profiles.wordpress.org/pabamato/), [@ankitguptaindia](https://profiles.wordpress.org/ankit-k-gupta/), [@phpbits](https://profiles.wordpress.org/phpbits/), [@BBerg10up](https://github.com/BBerg10up)).
* **Changed:** Documentation updates (props [@bobbingwide](https://profiles.wordpress.org/bobbingwide/)).
* **Fixed:** Make UI text in the component translatable (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@dinhtungdu](https://profiles.wordpress.org/dinhtungdu/)).
* **Fixed:** Popover initial focus on top instead of bottom or center of the contents (props [@phpbits](https://profiles.wordpress.org/phpbits/), [@BBerg10up](https://github.com/BBerg10up)).
* **Fixed:** Compatility with the new widget screen in WordPress 5.8 and formatting of returned elements (props [@phpbits](https://profiles.wordpress.org/phpbits/)).
* **Security:** Bump `acorn` from 5.7.3 to 5.7.4 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `ini` from 1.3.5 to 1.3.7 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `elliptic` from 6.5.2 to 6.5.4 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `y18n` from 4.0.0 to 4.0.1 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `rmccue/requests` from 1.7.0 to 1.8.0 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `ssri` from 6.0.1 to 6.0.2 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `lodash` from 4.17.15 to 4.17.21 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `browserslist` from 4.8.7 to 4.16.6 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `path-parse` from 1.0.6 to 1.0.7 (props [@dependabot](https://github.com/apps/dependabot)).

= 1.0.2 =
* **Changed:** Relicensed from MIT to GPLv2.
* **Fixed:** Hook on `enqueue_block_editor_assets` so script is only enqueued in editor (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/), [@josch87](https://profiles.wordpress.org/josch87/)).
* **Fixed:** Register text domain to ensure translations can be loaded (props [@ocean90](https://profiles.wordpress.org/ocean90/)).
* **Fixed:** Bump WordPress version "tested up to" 5.3 (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Fixed:** Documentation and credits (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).

= 1.0.1 =
* **Added:** Documentation for keyboard shortcut (props [@mrwweb](https://profiles.wordpress.org/mrwweb/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Fixed:** Ensure character map appears as expected in Firefox (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).

= 1.0.0 =
* **Added:** Initial plugin release 🎉.
* **Added:** Wrap [React Character Map](https://github.com/Dayjo/react-character-map) in a Gutenberg Popover (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Added:** Plugin header and icon images (props [@dillonmccallum](https://profiles.wordpress.org/dillonmccallum/)).
