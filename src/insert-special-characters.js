
const { registerFormatType, toggleFormat } = wp.richText;
const { createElement, Fragment } = wp.element;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { Popover } = wp.components;
const { getRectangleFromRange } = wp.dom;

import { CharacterMap } from 'react-character-map';
import './insert-special-characters.css';
const CharacterMapOptions = {
	name: 'specialcharacters',
	title: 'Special Characters',
	character: 'Ω',
	value: '',
};

const { name, title, character } = CharacterMapOptions;
const type = `special-characters/${ name }`;
let originalValue;

// Calculate the caret insertion point.
const getCaretRect = () => {
	const range = window.getSelection().getRangeAt( 0 );

	if ( range ) {
		return getRectangleFromRange( range );
	}
};

/**
 * Register the "Format Type" to create the character inserter.
 */
registerFormatType( type, {
	title,
	tagName: name,
	className: null,
	active: false,

	/**
	 * The `edit` function is called when the Character Map is selected.
	 */
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			originalValue = value;
			onChange( toggleFormat( value, { type } ) );
		};

		// Only display the character map when it is active.
		if ( isActive ) {
			return (
				<Popover
					className="character-map-popover"
					position="bottom center"
					focusOnMount={ false }
					key="charmap-popover"
					onClick={ () => {} }
					getAnchorRect={ getCaretRect }
				>
					<CharacterMap
						onSelect={

							// Store the selected character and close the popover.
							( char ) => {
								const slicedNewText = originalValue.text.slice( 0, originalValue.start ) +
									char.char +
									originalValue.text.slice( originalValue.end );
								value.text = slicedNewText;
								onChange( toggleFormat( value, { type, attributes: { char } } ) );
								onToggle();
								blur();
							}
						}
						key="charmap"
					/>
				</Popover>
			);
		}

		return (
			createElement( Fragment, null,
				createElement( RichTextShortcut, {
					type: 'primary',
					character,
					onUse: onToggle
				} ),
				createElement( RichTextToolbarButton, {
					title,
					onClick: onToggle,
					isActive,
					shortcutType: 'primary',
					shortcutCharacter: character,
					className: `toolbar-button-with-text toolbar-button__advanced-${ name }`,
					icon: 'editor-customchar'
				} ) )
		);
	}
} );
