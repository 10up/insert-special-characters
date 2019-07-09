const { registerFormatType, toggleFormat } = wp.richText;
const { createElement, Fragment } = wp.element;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { Popover } = wp.components;
const { getRectangleFromRange } = wp.dom;

import { CharacterMap } from 'react-character-map';
import './gutenberg-character-map.css';
const GutenbergCharacterMap =
	{
		name: 'charactermap',
		title: 'Character map',
		character: 'o',
		value: '',
	};

const { name, title, character } = GutenbergCharacterMap;
const type = `character-map/${ name }`;
let originalValue;

function getCaretRect() {
	const range = window.getSelection().getRangeAt( 0 );

	if ( range ) {
		return getRectangleFromRange( range );
	}
}


registerFormatType( type, {
	title,
	tagName: name,
	className: null,
	active: false,
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			console.log( 'onToggle', isActive, value );
			originalValue = value;
			onChange( toggleFormat( value, { type } ) );
		};

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
							( char ) => {
								const slicedNewText = originalValue.text.slice( 0, originalValue.start ) +
									char.char +
									originalValue.text.slice( originalValue.end );
								value.text = slicedNewText;
								onChange( toggleFormat( value, { type, attributes: { char } } ) );
								onToggle( false );
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
