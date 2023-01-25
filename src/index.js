import { registerFormatType, toggleFormat, insert } from '@wordpress/rich-text';
import { Fragment } from '@wordpress/element';
import { BlockControls, RichTextShortcut } from '@wordpress/block-editor';
import { Popover, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { displayShortcut } from '@wordpress/keycodes';
import { __ } from '@wordpress/i18n';

import { CharacterMap } from 'react-character-map';
import './insert-special-characters.scss';

// Load the default Chars provided by react-character-map component.
import Chars from '../node_modules/react-character-map/dist/component/chars.json';

const InsertSpecialCharactersOptions = {
	name: 'insertspecialcharacters',
	title: __( 'Special Characters', 'insert-special-characters' ),
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
	 *
	 * @param {Object}   props          Props object.
	 * @param {boolean}  props.isActive State of popover.
	 * @param {boolean}  props.value    State of popover.
	 * @param {Function} props.onChange Event handler to detect range selection.
	 */
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			// Set up the anchorRange when the Popover is opened.
			const selection = document.defaultView.getSelection();

			anchorRange =
				selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;
			onChange( toggleFormat( value, { type } ) );
		};
		// Pin the Popover to the caret position.
		const anchorRect = () => {
			return anchorRange ? anchorRange.getBoundingClientRect() : null;
		};
		const characters = applyFilters( `${ name }-characters`, Chars );
		// Display the character map when it is active.
		const specialCharsPopover = isActive && (
			<Popover
				className="character-map-popover"
				placement="bottom-start"
				focusOnMount="firstElement"
				key="charmap-popover"
				getAnchorRect={ anchorRect }
				expandOnMobile={ true }
				headerTitle={ __(
					'Insert Special Character',
					'insert-special-characters'
				) }
				onClose={ () => {
					onChange( toggleFormat( value, { type } ) );
				} }
			>
				<CharacterMap
					characterData={ characters }
					onSelect={
						// Insert the selected character and close the popover.
						( char ) => {
							onChange( insert( value, char.char ) );
						}
					}
					categoryNames={ {
						Math: __( 'Math', 'insert-special-characters' ),
						Currency: __( 'Currency', 'insert-special-characters' ),
						Punctuation: __(
							'Punctuation',
							'insert-special-characters'
						),
						Misc: __( 'Misc', 'insert-special-characters' ),
						Greek: __( 'Greek', 'insert-special-characters' ),
						Latin: __( 'Latin', 'insert-special-characters' ),
						Arrows: __( 'Arrows', 'insert-special-characters' ),
						Music: __( 'Music', 'insert-special-characters' ),
					} }
					categoriesLabelText={ __(
						'Categories',
						'insert-special-characters'
					) }
					characterListLabelText={ __(
						'Character List',
						'insert-special-characters'
					) }
					filterLabelText={ __(
						'Filter',
						'insert-special-characters'
					) }
					key="charmap"
					mostUsedPalette={ tenupIscVars.most_read_palette }
					mostUsedPaletteLabelText={ __(
						'Most Used',
						'insert-special-characters'
					) }
				/>
			</Popover>
		);

		return (
			<Fragment>
				<BlockControls group="other">
					<ToolbarGroup>
						<ToolbarButton
							className={ `toolbar-button-with-text toolbar-button__advanced-${ name }` }
							icon="editor-customchar"
							isPressed={ isActive }
							label={ title }
							onClick={ onToggle }
							shortcut={ displayShortcut.primary( character ) }
						/>
					</ToolbarGroup>
				</BlockControls>
				<Fragment>
					<RichTextShortcut
						type="primary"
						character={ character }
						onUse={ onToggle }
					/>
				</Fragment>
				{ specialCharsPopover }
			</Fragment>
		);
	},
} );
