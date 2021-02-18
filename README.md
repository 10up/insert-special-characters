# Insert Special Characters

> A Special Character inserter for the WordPress block editor (Gutenberg).

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![Release Version](https://img.shields.io/github/release/10up/insert-special-characters.svg)](https://github.com/10up/insert-special-characters/releases/latest) ![WordPress tested up to version](https://img.shields.io/badge/WordPress-v5.6%20tested-success.svg) [![GPLv2 License](https://img.shields.io/github/license/10up/insert-special-characters.svg)](https://github.com/10up/insert-special-characters/blob/develop/LICENSE.md)

## Overview

Ever wanted to add a special character while working within Gutenberg and suddenly find yourself longing for the days of the Classic Editor and the Special Character inserter?  Well long no more, the Insert Special Characters plugin is here to ease your publishing woes!

**Note:** you can display the popover via the `ctrl`/`cmd` + `o` keyboard shortcut.

![Demo of special characters within Gutenberg](assets/insert-special-characters.gif "Example of a special characters in the new WordPress editor")

## Extending
To control the available tabs and characters, developers can filter the data set using the `insertspecialcharacters-characters` JavaScript (`wp.hooks`) filter.

For example, to create a character inserter that only provides currency symbols:

```js
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

```

## Requirements

* PHP 5.6+
* [WordPress](http://wordpress.org/) 5.2+

## Installation

1. Install the plugin via the plugin installer, either by searching for it or uploading a .zip file.
1. Activate the plugin.
1. Use Insert Special Characters!

## Support Level

**Active:** 10up is actively working on this, and we expect to continue work for the foreseeable future including keeping tested up to the most recent version of WordPress.  Bug reports, feature requests, questions, and pull requests are welcome.

## Changelog

A complete listing of all notable changes to Insert Special Characters are documented in [CHANGELOG.md](https://github.com/10up/insert-special-characters/blob/develop/CHANGELOG.md).

## Contributing

Please read [CODE_OF_CONDUCT.md](https://github.com/10up/insert-special-characters/blob/develop/CODE_OF_CONDUCT.md) for details on our code of conduct, [CONTRIBUTING.md](https://github.com/10up/insert-special-characters/blob/develop/CONTRIBUTING.md) for details on the process for submitting pull requests to us, and [CREDITS.md](https://github.com/10up/insert-special-characters/blob/develop/CREDITS.md) for a listing of maintainers of, contributors to, and libraries used by Insert Special Characters.

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10up.com/uploads/2016/10/10up-Github-Banner.png" width="850" alt="Work with us at 10up"></a>
