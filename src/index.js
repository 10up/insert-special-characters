import { registerFormatType, toggleFormat, insert } from '@wordpress/rich-text';
import { Fragment, useEffect, useState } from '@wordpress/element';
import {
	BlockControls,
	RichTextShortcut,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { Popover, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { displayShortcut } from '@wordpress/keycodes';
import {
	select,
	useSelect,
	dispatch,
	createReduxStore,
	register,
} from '@wordpress/data';
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
let anchorRect;

const DEFAULT_STATE = {
	clientId: '',
	originalContent: '',
};

const caretDataStore = createReduxStore( 'caret-data-store', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_CLIENT_ID':
				return {
					...state,
					clientId: action.clientId,
				};

			case 'SET_ORIGINAL_CONTENT':
				return {
					...state,
					originalContent: action.originalContent,
				};
		}

		return state;
	},
	actions: {
		setClientId( clientId ) {
			return {
				type: 'SET_CLIENT_ID',
				clientId,
			};
		},
		setOriginalContent( originalContent ) {
			return {
				type: 'SET_ORIGINAL_CONTENT',
				originalContent,
			};
		},
	},
	selectors: {
		getClientId( state ) {
			return state.clientId;
		},
		getOriginalContent( state ) {
			return state.originalContent;
		},
	},
} );

register( caretDataStore );

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
	 * @param {Object}      props            Props object.
	 * @param {boolean}     props.isActive   State of popover.
	 * @param {boolean}     props.value      State of popover.
	 * @param {Function}    props.onChange   Event handler to detect range selection.
	 * @param {HTMLElement} props.contentRef The editable element.
	 */
	edit( { isActive, value, onChange, contentRef } ) {
		const [ inActiveBySelection, setInactiveBySelection ] =
			useState( false );
		const { start, end, selectedBlock } = useSelect( ( __select ) => {
			return {
				start: __select( blockEditorStore ).getSelectionStart().offset,
				end: __select( blockEditorStore ).getSelectionEnd().offset,
				selectedBlock: __select( blockEditorStore ).getSelectedBlock(),
			};
		} );

		useEffect( () => {
			const content = selectedBlock.attributes.content;
			dispatch( caretDataStore ).setClientId( selectedBlock.clientId );
			dispatch( caretDataStore ).setOriginalContent( content );
			const preBreak = content.substring( 0, start );
			const postBreak = content.substring( start );
			const postBreakFirstChar = postBreak.substring( 0, 1 );
			const postBreakWithoutFirstChar = postBreak.substring( 1 );
			const charWrapper = `<span class="insert-special-character__faux-caret">${ postBreakFirstChar }</span>`;
			const finalContent =
				preBreak + charWrapper + postBreakWithoutFirstChar;

			if ( ( isActive || inActiveBySelection ) && start - end === 0 ) {
				contentRef.current.innerHTML = finalContent;
			}

			return () => {
				const storedClientId = select( caretDataStore ).getClientId();

				if ( selectedBlock.clientId !== storedClientId ) {
					return;
				}

				const backupUpContent =
					select( caretDataStore ).getOriginalContent();

				if ( backupUpContent ) {
					if ( inActiveBySelection ) {
					}
					contentRef.current.innerHTML = backupUpContent;
					dispatch( caretDataStore ).setOriginalContent( '' );
				}
			};
		}, [ isActive, inActiveBySelection ] );

		const onToggle = () => {
			const selection = contentRef.current.ownerDocument.getSelection();

			anchorRange =
				selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;

			// Pin the Popover to the caret position.
			const boundingClientRect = anchorRange
				? anchorRange.getBoundingClientRect()
				: null;

			anchorRect = anchorRange ? () => boundingClientRect : null;
			onChange( toggleFormat( value, { type } ) );
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
							const newValue = {
								...value,
								// grab the format at the start position,
								// if it is undefined then use an empty array.
								formats: value.formats.at( value.start )
									? [ value.formats.at( value.start ) ]
									: [],
								text: char.char,
							};

							setInactiveBySelection( true );

							onChange(
								insert(
									value,
									newValue,
									newValue.start,
									newValue.end
								)
							);
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
