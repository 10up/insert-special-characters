=== Insert Special Characters ===
Contributors:      10up, adamsilverstein, johnwatkins0, jeffpaul
Tags:              Special Characters, Character Map, Omega, Gutenberg, Block, block editor
Stable tag:        1.1.3
Requires at least: 6.5
Tested up to:      6.7
Requires PHP:      7.4
License:           GPLv2
License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

A Special Character inserter for the WordPress block editor (Gutenberg).

== Description ==

Ever wanted to add a special character while working within the WordPress block editor (Gutenberg) and suddenly find yourself longing for the days of the Classic Editor and the Special Character inserter? Well long no more, the Insert Special Characters plugin is here to ease your publishing woes!

**Note:** you can display the popover via the `ctrl`/`cmd` + `o` keyboard shortcut.

Development takes place in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Technical Notes ==

* Requires PHP 7.4+.
* Requires [WordPress](http://wordpress.org/) 6.5+
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

1. Example of special characters selection in the Block Editor.
2. "Special Characters" option in Paragraph Block menu.
3. Initial special characters, showing the "Math" character set.
4. Filtering the special characters via search.
5. Resulting inserted special character (note focus on special character, rest of window has been blurred).

== Changelog ==

= 1.1.3 - 2024-11-18 =
* **Changed:** Update the UI to be more consistent with WordPress core props ([@psorensen](https://github.com/psorensen), [@fabiankaegy](https://github.com/fabiankaegy) via [#263](https://github.com/10up/insert-special-characters/pull/263)).
* **Changed:** Clean up NPM dependencies and update node to v20 (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter) via [#238](https://github.com/10up/insert-special-characters/pull/238)).
* **Changed:** Bump WordPress "tested up to" version 6.7 (props [@sudip-md](https://github.com/sudip-md), [@sonali886](https://github.com/sonali886), [@godleman](https://github.com/godleman), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#260](https://github.com/10up/insert-special-characters/pull/260), [#261](https://github.com/10up/insert-special-characters/pull/261), [#273](https://github.com/10up/insert-special-characters/pull/273), [#274](https://github.com/10up/insert-special-characters/pull/274)).
* **Security:** Bump `express` from 4.18.2 to 4.19.2, `follow-redirects` from 1.15.5 to 1.15.6, `ip` from 1.1.8 to 1.1.9 and `webpack-dev-middleware` from 5.3.3 to 5.3.4 (props [@dependabot](https://github.com/apps/dependabot), [@iamdharmesh](https://github.com/iamdharmesh) via [#254](https://github.com/10up/insert-special-characters/pull/254)).
* **Security:** Bump `braces` from 3.0.2 to 3.0.3, `pac-resolver` from 7.0.0 to 7.0.1, `socks` from 2.7.1 to 2.8.3, `ws` from 7.59 to 7.5.10 and removes `ip` (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#259](https://github.com/10up/insert-special-characters/pull/259)).
* **Security:** Bump `axios` from 1.6.7 to 1.7.7, `body-parser` from 1.20.2 to 1.20.3, `express` from 4.19.2 to 4.21.0, `ws` from 7.5.10 to 8.18.0, `@wordpress/scripts` from 27.1.0 to 29.0.0 and `webpack` from 5.90.0 to 5.94.0 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#267](https://github.com/10up/insert-special-characters/pull/267), [#268](https://github.com/10up/insert-special-characters/pull/268)).

= 1.1.2 - 2024-01-08 =
* **Added:** Support for the WordPress.org plugin preview (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul) via [#232](https://github.com/10up/insert-special-characters/pull/232)).
* **Fixed:** Issue with blocks crashing due to faux caret (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter), [@ankitguptaindia](https://github.com/ankitguptaindia) via [#225](https://github.com/10up/insert-special-characters/pull/225)).
* **Fixed:** Issue with characters added to the beginning trimming text from the end (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter), [@ankitguptaindia](https://github.com/ankitguptaindia) via [#225](https://github.com/10up/insert-special-characters/pull/225)).
* **Changed:** Bump WordPress "tested up to" version to 6.4 (props [@qasumitbagthariya](https://github.com/qasumitbagthariya), [@jeffpaul](https://github.com/jeffpaul), [@QAharshalkadu](https://github.com/QAharshalkadu), [@ankitguptaindia](https://github.com/ankitguptaindia), [@dhanendran](https://github.com/dhanendran), [@iamdharmesh](https://github.com/iamdharmesh) via [#228](https://github.com/10up/insert-special-characters/pull/228)).

= 1.1.1 - 2023-10-17 =
* **Fixed:** Address an issue where some blocks would crash due to a missing attribute (props [@dkotter](https://github.com/dkotter) via [#221](https://github.com/10up/insert-special-characters/pull/221)).
* **Security:** Bump `@babel/traverse` from 7.20.5 to 7.23.2 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter) via [#219](https://github.com/10up/insert-special-characters/pull/219)).

= 1.1.0 - 2023-10-16 =
* **Added:** Show a faux cursor to preserve context (props [@Sidsector9](https://github.com/Sidsector9), [@helen](https://github.com/helen), [@ravinderk](https://github.com/ravinderk) via [#207](https://github.com/10up/insert-special-characters/pull/207)).
* **Added:** Check for minimum required PHP version before loading the plugin (props [@kmgalanakis](https://github.com/kmgalanakis), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#210](https://github.com/10up/insert-special-characters/pull/210)).
* **Changed:** Bump WordPress "tested up to" version to 6.3 (props [@kmgalanakis](https://github.com/kmgalanakis), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#212](https://github.com/10up/insert-special-characters/pull/212), [#215](https://github.com/10up/insert-special-characters/pull/215)).
* **Fixed:** Ensure that when highlighting a special character, the block doesn't crash (props [@jrmd](https://github.com/jrmd), [@dkotter](https://github.com/dkotter) via [#204](https://github.com/10up/insert-special-characters/pull/204)).
* **Security:** Bump `semver` from 5.7.1 to 5.7.2 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter) via [#202](https://github.com/10up/insert-special-characters/pull/202)).
* **Security:** Bump `word-wrap` from 1.2.3 to 1.2.4 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#206](https://github.com/10up/insert-special-characters/pull/206)).
* **Security:** Bump `@cypress/request` from 2.88.10 to 3.0.0, `cypress` from 12.8.1 to 13.3.1 and `@10up/cypress-wp-utils` from 0.1.0 to 0.2.0 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter) via [#213](https://github.com/10up/insert-special-characters/pull/213)).
* **Security:** Bump `tough-cookie` from 4.1.2 to 4.1.3 and `@cypress/request` from 2.88.10 to 2.88.12 (props [@dependabot](https://github.com/apps/dependabot), [@ravinderk](https://github.com/ravinderk) via [#214](https://github.com/10up/insert-special-characters/pull/214)).
* **Security:** Bump `postcss` from 8.4.20 to 8.4.31 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#216](https://github.com/10up/insert-special-characters/pull/216)).

Further changelog entries can be found in the [CHANGELOG.md](https://github.com/10up/insert-special-characters/blob/trunk/CHANGELOG.md) file.

== Upgrade Notice ==

= 1.0.5 =
This release bumps the WordPress minimum supported version from 5.4 to 5.5.
