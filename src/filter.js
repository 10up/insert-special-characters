import { addFilter } from '@wordpress/hooks';

/**
 * Recent Special Characters.
 *
 * This filter will add the "Recently Used" category and display
 * recently selected special characters.
 *
 * @param {Object} characters Default Characters.
 * @return {Object} All Characters including Recently used characters.
 */
addFilter(
	'insertspecialcharacters-characters',
	'recentCharacters',
	function ( characters ) {
		const recentCharacters =
			JSON.parse( localStorage.getItem( 'recentCharacters' ) ) || [];

		if ( recentCharacters?.length ) {
			return {
				'Recently Used': recentCharacters,
				...characters,
			};
		}

		return {
			...characters,
		};
	}
);
