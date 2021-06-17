import { registerFormatType } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';

import { Edit } from './edit';
import './insert-special-characters.css';
import { InsertSpecialCharactersOptions } from './options';

const { name, title } = InsertSpecialCharactersOptions;
export const formatType = `special-characters/${ name }`;
export const cursorFormatType = 'special-characters/cursor';

export const HAIR_SPACE = ' '; // Barely visible space character &#8202.

/**
 * Register the "Format Type" to create the character inserter.
 */
registerFormatType( formatType, {
	title,
	tagName: name,
	className: null,
	active: false,

	/**
	 * The `edit` function is called when the Character Map is selected.
	 */
	edit: Edit,
} );

registerFormatType( cursorFormatType, {
	attributes: {
		className: 'class',
	},
	className: 'insert-special-characters-cursor',
	title: __( 'Insert Special Characters Cursor' ),
	tagName: 'span',
	edit: () => null,
} );
