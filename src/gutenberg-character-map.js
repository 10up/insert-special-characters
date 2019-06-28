const { registerFormatType, toggleFormat } = window.wp.richText;
const { createElement, Fragment } = window.wp.element;
const { RichTextToolbarButton, RichTextShortcut } = window.wp.editor;

import { CharacterMap } from 'react-character-map';
import './gutenberg-character-map.css';
const GutenbergCharacterMap =
	{
		name: 'charactermap',
		title: 'Ω Character map',
		character: 'o',
		value: '',
	};

const { name, title, character } = GutenbergCharacterMap;
const type = `character-map/${ name }`;
let originalValue;
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
				/>
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
					className: `toolbar-button-with-text toolbar-button__advanced-${ name }`
				} ) )
		);
	}
} );
