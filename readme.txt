=== Insert Special Characters ===
Contributors:      10up, adamsilverstein, johnwatkins0, jeffpaul
Tags:              Special Characters, Character Map, Omega, Gutenberg, Block, block editor
Stable tag:        1.1.2
Requires at least: 6.1
Tested up to:      6.4
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
* Requires [WordPress](http://wordpress.org/) 5.7+
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

= 1.0.7 - 2023-06-28 =
* **Added:** Mochawesome reporter added for Cypress test report (props [@jayedul](https://github.com/jayedul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#194](https://github.com/10up/insert-special-characters/pull/194)).
* **Changed:** Bump WordPress "tested up to" version 6.2 (props [@jayedul](https://github.com/jayedul), [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9) via [#192](https://github.com/10up/insert-special-characters/pull/192), [#193](https://github.com/10up/insert-special-characters/pull/193)).
* **Changed:** Run E2E tests on the zip generated by "Build release zip" action (props [@jayedul](https://github.com/jayedul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#190](https://github.com/10up/insert-special-characters/pull/190)).
* **Fixed:** Maintain text formatting when inserting a character (props [@jrmd](https://github.com/jrmd), [@Sidsector9](https://github.com/Sidsector9) via [#187](https://github.com/10up/insert-special-characters/pull/187)).
* **Fixed:** Ensure grid positioning is correct when text is selected (props [@bmarshall511](https://github.com/bmarshall511), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#195](https://github.com/10up/insert-special-characters/pull/195)).
* **Fixed:**  Popover grid positioning in the Site Editor (props [@bmarshall511](https://github.com/bmarshall511), [@fabiankaegy](https://github.com/fabiankaegy) via [#199](https://github.com/10up/insert-special-characters/pull/199)).
* **Fixed:** Address failing E2E tests in WP 6.2 (props [@ggutenberg](https://github.com/ggutenberg), [@iamdharmesh](https://github.com/iamdharmesh) via [#189](https://github.com/10up/insert-special-characters/pull/189)).
* **Security:** Bump `@sideway/formula` from 3.0.0 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#186](https://github.com/10up/insert-special-characters/pull/186)).
* **Security:** Bump `webpack` from 5.75.0 to 5.76.1 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#188](https://github.com/10up/insert-special-characters/pull/188)).
* **Security:** Bump `simple-git` from 3.15.1 to 3.19.1 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter) via [#200](https://github.com/10up/insert-special-characters/pull/200)).
* **Security:** Bump `ua-parser-js` from 0.7.32 to 0.7.35 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter) via [#201](https://github.com/10up/insert-special-characters/pull/201)).

= 1.0.6 - 2023-02-07 =
**Note that this release bumps the WordPress minimum from 5.7 to 6.1. and minimum PHP version from 5.6 to 7.4**

* **Added:** Scanning of dependencies to ensure they are GPL-compatible (props [@jeffpaul](https://github.com/jeffpaul), [@vikrampm1](https://github.com/vikrampm1), [@GeekMasher](https://github.com/GeekMasher), [@dkotter](https://github.com/dkotter), [@Sidsector9](https://github.com/Sidsector9) via [#157](https://github.com/10up/insert-special-characters/pull/157), [#164](https://github.com/10up/insert-special-characters/pull/164)).
* **Added:** GitHub Action workflow to build a pre-release ZIP (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter) via [#174](https://github.com/10up/insert-special-characters/pull/174)).
* **Changed:** Support Level from `Active` to `Stable` (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#184](https://github.com/10up/insert-special-characters/pull/184)).
* **Changed:** Bump minimum PHP version from 5.6 to 7.4 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#166](https://github.com/10up/insert-special-characters/pull/166)).
* **Changed:** Bump minimum WordPress version from 5.5 to 5.7 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#166](https://github.com/10up/insert-special-characters/pull/166)).
* **Changed:** Bump minimum supported WordPress version from 5.7 to 6.1 (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi), [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul) via [#173](https://github.com/10up/insert-special-characters/pull/173)).
* **Changed:** Bump minimum Node version from 12 to 16 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#166](https://github.com/10up/insert-special-characters/pull/166)).
* **Changed:** Updated documentation and plugin screencast GIF demo (props [@jeffpaul](https://github.com/jeffpaul), [@cadic](https://github.com/cadic) via [#163](https://github.com/10up/insert-special-characters/pull/163)).
* **Fixed:** Non-breaking spacing `&nbsp;` character (props [@redorca](https://profiles.wordpress.org/redorca/), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#159](https://github.com/10up/insert-special-characters/pull/159)).
* **Fixed:** WordPress minimum supported version to 5.5 (props [@grappler](https://github.com/grappler), [@dkotter](https://github.com/dkotter) via [#158](https://github.com/10up/insert-special-characters/pull/158)).
* **Fixed:** Translation issue for the string "Most Used" (props [@alexclassroom](https://github.com/alexclassroom), [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi), [@iamdharmesh](https://github.com/iamdharmesh) via [#172](https://github.com/10up/insert-special-characters/pull/172)).
* **Security:** Bump `wp-env` from 4.9 to to 5.3 (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9) via [#161](https://github.com/10up/insert-special-characters/pull/161)).
* **Security:** Bump `loader-utils` from 2.0.2 to 2.0.4 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#171](https://github.com/10up/insert-special-characters/pull/171)).
* **Security:** Bump `simple-git` from 3.14.1 to 3.16.0 (props [@dependabot](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul) via [#175](https://github.com/10up/insert-special-characters/pull/175), [#182](https://github.com/10up/insert-special-characters/pull/182)).
* **Security:** Bump `json5` from 1.0.1 to 1.0.2 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#180](https://github.com/10up/insert-special-characters/pull/180)).
* **Security:** Bump `ua-parser-js` from 0.7.32 to 0.7.33 (props [@dependabot](https://github.com/apps/dependabot), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#183](https://github.com/10up/insert-special-characters/pull/183)).
* **Security:** Bump `http-cache-semantics` from 4.1.0 to 4.1.1 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#185](https://github.com/10up/insert-special-characters/pull/185)).

= 1.0.5 - 2022-07-18 =
**Note that this release bumps the WordPress minimum supported version from 5.4 to 5.5.**

* **Added:** Most and last used character palette. Most used palette can be turned on by going to `Settings > Writing` (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi) via [#147](https://github.com/10up/insert-special-characters/pull/147)).
* **Added:** End-to-end testing with Cypress (props [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#116](https://github.com/10up/insert-special-characters/pull/116)).
* **Added:** More robust PHP testing, including PHP 8 compatibility (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter), [@cadic](https://github.com/cadic) via [#118](https://github.com/10up/insert-special-characters/pull/118), [#129](https://github.com/10up/insert-special-characters/pull/129)).
* **Added:** Dependency security scanning (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#126](https://github.com/10up/insert-special-characters/pull/126)).
* **Changed:** Character palette UI changed to be in alignment with Gutenberg (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi) via [#147](https://github.com/10up/insert-special-characters/pull/147)).
* **Changed:** Bump WordPress version "tested up to" 6.0 (props [@vikrampm1](https://github.com/vikrampm1), [@jeffpaul](https://github.com/jeffpaul) via [#125](https://github.com/10up/insert-special-characters/pull/125)).
* **Changed:** Bump WordPress minimum supported version from 5.4 to 5.5 (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#150](https://github.com/10up/insert-special-characters/pull/150)).
* **Changed:** Release instructions to ensure dependency updates are included (props [@jeffpaul](https://github.com/jeffpaul) via [#155](https://github.com/10up/insert-special-characters/pull/155)).
* **Fixed:** Address an issue where the inserter popup can overflow which prevents user from selecting characters (props [@cldhmmr](https://github.com/cldhmmr), [@Sidsector9](https://github.com/Sidsector9), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#130](https://github.com/10up/insert-special-characters/pull/130)).
* **Fixed:** Ensure required WordPress libraries were included as dependencies (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#132](https://github.com/10up/insert-special-characters/pull/132)).
* **Security:** Bump `guzzlehttp/psr7` from 1.6.1 to 1.8.5 (props [@dependabot](https://github.com/apps/dependabot) via [#119](https://github.com/10up/insert-special-characters/pull/119)).
* **Security:** Bump `minimist` from 1.2.5 to 1.2.6 (props [@dependabot](https://github.com/apps/dependabot) via [#120](https://github.com/10up/insert-special-characters/pull/120)).
* **Security:** Bump `ansi-regex` from 3.0.0 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot) via [#121](https://github.com/10up/insert-special-characters/pull/121)).
* **Security:** Bump `async` from 2.6.3 to 2.6.4 (props [@dependabot](https://github.com/apps/dependabot) via [#124](https://github.com/10up/insert-special-characters/pull/124)).
* **Security:** Bump `semver-regex` from 3.1.3 to 3.1.4 (props [@dependabot](https://github.com/apps/dependabot) via [#128](https://github.com/10up/insert-special-characters/pull/128)).
* **Security:** Bump `react-character-map` from 0.4.4 to 0.4.6 (props [@dependabot](https://github.com/apps/dependabot) via [#139](https://github.com/10up/insert-special-characters/pull/139)).
* **Security:** Bump `@wordpress/env` from 4.3.1 to 4.9.0 (props [@dependabot](https://github.com/apps/dependabot) via [#140](https://github.com/10up/insert-special-characters/pull/140)).
* **Security:** Bump `@10up/cypress-wp-utils` from `ecf048c` to `d52e775` (props [@dependabot](https://github.com/apps/dependabot) via [#142](https://github.com/10up/insert-special-characters/pull/142)).
* **Security:** Bump `husky` from 4.3.8 to 8.0.1 (props [@dependabot](https://github.com/apps/dependabot) via [#144](https://github.com/10up/insert-special-characters/pull/144)).

= 1.0.4 - 2022-01-27 =
* **Added:** Many new special characters (e.g., ⅐, ⅑, ⅒, single quotation marks, ß, ẞ, Ć, ć, Ḉ, ḉ) and grouping (Music) (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Added:** Issue management automation and CodeQL analysis via GitHub Actions (props [@jeffpaul](https://github.com/jeffpaul), [@cadic](https://github.com/cadic)).
* **Changed:** Move icon from dropdown to block format toolbar (props [@pabamato](https://github.com/pabamato), [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9), [@mahnunchik](https://github.com/mahnunchik)).
* **Changed:** Updated `react-character-map` from 0.4.2 to 0.4.4 (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Changed:** Bump WordPress "tested up to" version 5.9 (props [@cadic](https://github.com/cadic), [@sudip-10up](https://github.com/sudip-10up)).
* **Changed:** Documentation updates (props [@faisal-alvi](https://github.com/faisal-alvi), [@sudip-10up](https://github.com/sudip-10up)).
* **Fixed:** Character map popover scrolling issue on mobile viewport (props [@ajmaurya99](https://github.com/ajmaurya99), [@Sidsector9](https://github.com/Sidsector9), [@adamsilverstein](https://github.com/adamsilverstein), [@helen](https://github.com/helen)).

= 1.0.3 - 2021-08-17 =
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

= 1.0.2 - 2019-11-22 =
* **Changed:** Relicensed from MIT to GPLv2.
* **Fixed:** Hook on `enqueue_block_editor_assets` so script is only enqueued in editor (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/), [@josch87](https://profiles.wordpress.org/josch87/)).
* **Fixed:** Register text domain to ensure translations can be loaded (props [@ocean90](https://profiles.wordpress.org/ocean90/)).
* **Fixed:** Bump WordPress version "tested up to" 5.3 (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Fixed:** Documentation and credits (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).

= 1.0.1 - 2019-09-06 =
* **Added:** Documentation for keyboard shortcut (props [@mrwweb](https://profiles.wordpress.org/mrwweb/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Fixed:** Ensure character map appears as expected in Firefox (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).

= 1.0.0 - 2019-08-21 =
* **Added:** Initial plugin release 🎉.
* **Added:** Wrap [React Character Map](https://github.com/Dayjo/react-character-map) in a Gutenberg Popover (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Added:** Plugin header and icon images (props [@dillonmccallum](https://profiles.wordpress.org/dillonmccallum/)).

== Upgrade Notice ==

= 1.0.5 =
This release bumps the WordPress minimum supported version from 5.4 to 5.5.
