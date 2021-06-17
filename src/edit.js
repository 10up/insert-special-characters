import { Component } from '@wordpress/element';
import { RichTextToolbarButton, RichTextShortcut } from '@wordpress/editor';
import { toggleFormat, insert } from '@wordpress/rich-text';

import { formatType, cursorFormatType, HAIR_SPACE } from '.';
import { InsertSpecialCharactersOptions } from './options';
import { SpecialCharactersPopover } from './special-characters-popover';

const { name, title, character } = InsertSpecialCharactersOptions;

function getAnchorRange() {
	// Set up the anchorRange when the Popover is opened.
	const selection = window.getSelection();

	return selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;
}

export class Edit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedText: '',
		};

		this.onToggle = this.onToggle.bind( this );
	}

	onToggle() {
		const { onChange, value } = this.props;

		if ( value.start !== value.end ) {
			this.setState( {
				selectedText: value.text.substring( value.start, value.end ),
			} );
		}

		let newValue = insert(
			value,
			{
				formats: [ [ { type: cursorFormatType } ] ],
				replacements: [],
				text: HAIR_SPACE,
			},
			value.start
		);
		newValue = toggleFormat( newValue, { type: formatType } );

		onChange( newValue );
	}

	render() {
		const { isActive, onChange, value, onFocus } = this.props;
		const { selectedText } = this.state;

		// Display the character map when it is active.
		if ( isActive && value ) {
			return (
				<SpecialCharactersPopover
					anchorRange={ getAnchorRange() }
					onChange={ onChange }
					value={ value }
					onFocus={ onFocus }
					selectedText={ selectedText }
				/>
			);
		}

		return (
			<>
				<RichTextShortcut
					type="primary"
					character={ character }
					onUse={ this.onToggle }
				/>
				<RichTextToolbarButton
					title={ title }
					onClick={ this.onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter={ character }
					className={ `toolbar-button-with-text toolbar-button__advanced-${ name }` }
					icon="editor-customchar"
				/>
			</>
		);
	}
}
