const { registerFormatType, toggleFormat, insert } = wp.richText;
const { createElement, Fragment } = wp.element;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { Popover } = wp.components;
const { getRectangleFromRange } = wp.dom;
const { __ } = wp.i18n;

import { CharacterMap } from 'react-character-map';
import './insert-special-characters.css';
const InsertSpecialCharactersOptions = {
	name: 'specialcharacters',
	title: __( 'Special Characters', 'insert-special-characters' ) ,
	character: 'o',
	value: '',
};

const { name, title, character } = InsertSpecialCharactersOptions;
const type = `special-characters/${ name }`;
let anchorRange;
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

			// Set up the anchorRange.
			const selection = window.getSelection();
			anchorRange = selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;
			onChange( toggleFormat( value, { type } ) );
		};

		const anchorRect =  () => {
			return getRectangleFromRange( anchorRange );
		} ;

		// Only display the character map when it is active.
		if ( isActive ) {
			return (
				<Popover
					className="character-map-popover"
					position="bottom center"
					focusOnMount="firstElement"
					key="charmap-popover"
					onClick={ () => {} }
					getAnchorRect={ anchorRect }
					expandOnMobile={ true }
					headerTitle={ __( 'Insert Special Character', 'insert-special-characters' ) }
					onClose={ () => { onChange( toggleFormat( value, { type } ) ); } }
				>
					<CharacterMap
						onSelect={

							// Insert the selected character and close the popover.
							( char ) => {
								onChange( insert( value, char.char ) );
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
