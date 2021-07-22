# Changelog

All notable changes to this project will be documented in this file, per [the Keep a Changelog standard](http://keepachangelog.com/).

## [Unreleased] - TBD

## [1.0.3] - TBD
### Added
- Many new special characters (e.g., em dash, en dash, hair space, thin space, no-break space, en space, em space, zero width non-joiner, non-breaking hyphen) and groupings (Currency, Punctuation, Greek).
- Focus style on buttons to improve accessibility for keyboard users (props [@samikeijonen](https://github.com/samikeijonen) via [#62](https://github.com/10up/insert-special-characters/pull/62)).
- WP Acceptance tests (props [@johnwatkins0](https://github.com/johnwatkins0), [@jeffpaul](https://github.com/jeffpaul) via [#70](https://github.com/10up/insert-special-characters/pull/70)).

### Changed
- Update to React Character Map `v0.4.2` (props [@johnwatkins0](https://github.com/johnwatkins0), [@dinhtungdu](https://github.com/dinhtungdu), [@jeffpaul](https://github.com/jeffpaul) via [#66](https://github.com/10up/insert-special-characters/pull/66), [#92](https://github.com/10up/insert-special-characters/pull/92)).
- Integrate [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for building and linting (props [@johnwatkins0](https://github.com/johnwatkins0), [@ocean90](https://github.com/ocean90), [@adamsilverstein](https://github.com/adamsilverstein) via [#65](https://github.com/10up/insert-special-characters/pull/65)).
- Renamed release branch from `master` to `trunk`, so please make sure to update and direct references to `master` in downstream code (props [@jeffpaul](https://github.com/jeffpaul) via [#78](https://github.com/10up/insert-special-characters/pull/78), [#79](https://github.com/10up/insert-special-characters/pull/79)).
- Bump WordPress version "tested up to" 5.8 (props [@jeffpaul](https://github.com/jeffpaul), [@davidchabbi](https://profiles.wordpress.org/davidchabbi/), [@pabamato](https://github.com/pabamato), [@ankitguptaindia](https://github.com/ankitguptaindia), [@phpbits](https://github.com/phpbits), [@BBerg10up](https://github.com/BBerg10up) via [#80](https://github.com/10up/insert-special-characters/pull/80), [#84](https://github.com/10up/insert-special-characters/pull/84), [#98](https://github.com/10up/insert-special-characters/pull/98)).
- Documentation updates (props [@bobbingwide](https://github.com/bobbingwide) via [#60](https://github.com/10up/insert-special-characters/pull/60)).

### Fixed
- Make UI text in the component translatable (props [@johnwatkins0](https://github.com/johnwatkins0), [@dinhtungdu](https://github.com/dinhtungdu) via [#66](https://github.com/10up/insert-special-characters/pull/66)).
- Popover initial focus on top instead of bottom or center of the contents (props [@phpbits](https://github.com/phpbits), [@BBerg10up](https://github.com/BBerg10up) via [#96](https://github.com/10up/insert-special-characters/pull/96)).
- Compatility with the new widget screen in WordPress 5.8 and formatting of returned elements (props [@phpbits](https://github.com/phpbits) via [#97](https://github.com/10up/insert-special-characters/pull/97)).

### Security
- Bump `acorn` from 5.7.3 to 5.7.4 (props [@dependabot](https://github.com/apps/dependabot) via [#67](https://github.com/10up/insert-special-characters/pull/67)).
- Bump `ini` from 1.3.5 to 1.3.7 (props [@dependabot](https://github.com/apps/dependabot) via [#77](https://github.com/10up/insert-special-characters/pull/77)).
- Bump `elliptic` from 6.5.2 to 6.5.4 (props [@dependabot](https://github.com/apps/dependabot) via [#73](https://github.com/10up/insert-special-characters/pull/73), [#82](https://github.com/10up/insert-special-characters/pull/82)).
- Bump `y18n` from 4.0.0 to 4.0.1 (props [@dependabot](https://github.com/apps/dependabot) via [#85](https://github.com/10up/insert-special-characters/pull/85)).
- Bump `rmccue/requests` from 1.7.0 to 1.8.0 (props [@dependabot](https://github.com/apps/dependabot) via [#86](https://github.com/10up/insert-special-characters/pull/86)).
- Bump `ssri` from 6.0.1 to 6.0.2 (props [@dependabot](https://github.com/apps/dependabot) via [#87](https://github.com/10up/insert-special-characters/pull/87)).
- Bump `lodash` from 4.17.15 to 4.17.21 (props [@dependabot](https://github.com/apps/dependabot) via [#72](https://github.com/10up/insert-special-characters/pull/72), [#88](https://github.com/10up/insert-special-characters/pull/88)).
- Bump `browserslist` from 4.8.7 to 4.16.6 (props [@dependabot](https://github.com/apps/dependabot) via [#89](https://github.com/10up/insert-special-characters/pull/89)).
- Bump `postcss` from 7.0.27 to 7.0.36 (props [@dependabot](https://github.com/apps/dependabot) via [#94](https://github.com/10up/insert-special-characters/pull/94)).

## [1.0.2] - 2019-11-22
### Changed
- Relicensed from MIT to GPLv2

### Fixed
- Hook on `enqueue_block_editor_assets` so script is only enqueued in editor (props [@adamsilverstein](https://github.com/adamsilverstein), [@josch87](https://github.com/josch87) via [#48](https://github.com/10up/insert-special-characters/pull/48))
- Register text domain to ensure translations can be loaded (props [@ocean90](https://github.com/ocean90) via [#52](https://github.com/10up/insert-special-characters/pull/52))
- Bump WordPress version "tested up to" 5.3 (props [@adamsilverstein](https://github.com/adamsilverstein) via [#53](https://github.com/10up/insert-special-characters/pull/53))
- Documentation and credits (props [@jeffpaul]() via [#46](https://github.com/10up/insert-special-characters/pull/46), [#54](https://github.com/10up/insert-special-characters/pull/54))

## [1.0.1] - 2019-09-06
### Added
- Documentation for keyboard shortcut (props [@mrwweb](https://github.com/mrwweb), [@jeffpaul](https://github.com/jeffpaul) via [#44](https://github.com/10up/insert-special-characters/pull/44))

### Fixed
- Ensure character map appears as expected in Firefox (props [@adamsilverstein](https://github.com/adamsilverstein) via [#41](https://github.com/10up/insert-special-characters/pull/41))

## [1.0.0] - 2019-08-21
### Added
- Initial plugin release 🎉
- Wrap [React Character Map](https://github.com/Dayjo/react-character-map) in a Gutenberg Popover (props [@adamsilverstein](https://github.com/adamsilverstein) via [#1](https://github.com/10up/insert-special-characters/pull/1))
- Plugin header and icon images (props [@McCallumDillon](https://github.com/McCallumDillon) via [#28](https://github.com/10up/insert-special-characters/pull/28))

[Unreleased]: https://github.com/10up/insert-special-characters/compare/trunk...develop
[1.0.3]: https://github.com/10up/insert-special-characters/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/10up/insert-special-characters/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/10up/insert-special-characters/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/10up/insert-special-characters/releases/tag/1.0.0
