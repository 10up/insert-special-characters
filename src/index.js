import { registerFormatType, create, insert, applyFormat, getActiveFormats } from '@wordpress/rich-text';
import {
	Fragment,
	useState,
	useRef,
	useEffect,
	useMemo,
} from '@wordpress/element';
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
	 * @param {boolean}     props.value      State of popover.
	 * @param {Function}    props.onChange   Event handler to detect range selection.
	 * @param {HTMLElement} props.contentRef The editable element.
	 */
	edit: function Edit( { value, onChange, contentRef } ) {
		const [ isPopoverActive, setIsPopoverActive ] = useState( false );
		const popoverRef = useRef( null );
		const { start, end } = value;

		function insertCharacter( char ) {
			let richTextCharacter = create( {
				text: char,
			} );

			for ( const format of getActiveFormats( value ) ) {
				richTextCharacter = applyFormat( richTextCharacter, format, 0, 1 );
			}

			const modified = insert( value, richTextCharacter, start, end );

			onChange( modified );
		}

		/**
		 * Find the text node and its offset within the provided element based on an index.
		 *
		 * @param {Node}   node  The root node to search for the index.
		 * @param {number} index The index within the text content.
		 * @return {Array|null} An array containing the text node and its offset, or null if not found.
		 */
		function findTextNodeAtIndex( node, index ) {
			let currentOffset = 0;

			/**
			 * Recursively traverse DOM to find the text node and offset.
			 *
			 * @param {Node} __node The current node.
			 * @return {Array|null} Array containing the text node and its offset, or null if not found.
			 */
			function traverseDOM( __node ) {
				if ( __node.nodeType === Node.TEXT_NODE ) {
					const textLength = __node.textContent.length;

					if ( currentOffset + textLength >= index ) {
						return [ __node, index - currentOffset ];
					}

					currentOffset += textLength;
				} else {
					for ( const childNode of __node.childNodes ) {
						const result = traverseDOM( childNode );

						if ( result ) {
							return result;
						}
					}
				}
			}

			return traverseDOM( node );
		}

		const memoizedPopoverRef = useMemo( () => popoverRef, [] );

		useEffect( () => {
			const fauxCursor = document.createElement( 'span' );

			if (
				contentRef.current &&
				memoizedPopoverRef.current &&
				isPopoverActive
			) {
				fauxCursor.className = 'insert-special-character__faux-caret';

				const range = document.createRange();
				const [ textNode, offsetWithinText ] = findTextNodeAtIndex(
					contentRef.current,
					start
				);

				if ( textNode ) {
					range.setStart( textNode, offsetWithinText );
					range.collapse( true );
					range.insertNode( fauxCursor );
					range.setStartAfter( fauxCursor );
					range.collapse( true );
				}
			}

			return () => {
				if ( fauxCursor ) {
					fauxCursor.remove();
				}
			};
		}, [ isPopoverActive, memoizedPopoverRef ] );

		const characters = applyFilters( `${ name }-characters`, Chars );
		// Display the character map when it is active.
		const specialCharsPopover = isPopoverActive && (
			<Popover
				className="character-map-popover"
				placement="bottom-start"
				focusOnMount="firstElement"
				key="charmap-popover"
				anchor={ contentRef.current }
				expandOnMobile={ true }
				headerTitle={ __(
					'Insert Special Character',
					'insert-special-characters'
				) }
				ref={ popoverRef }
			>
				<CharacterMap
					characterData={ characters }
					onSelect={
						// Insert the selected character and close the popover.
						( obj ) => {
							insertCharacter( obj.char );
							setIsPopoverActive( false );
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
							isPressed={ isPopoverActive }
							label={ title }
							onClick={ () =>
								setIsPopoverActive( ! isPopoverActive )
							}
							shortcut={ displayShortcut.primary( character ) }
						/>
					</ToolbarGroup>
				</BlockControls>
				<Fragment>
					<RichTextShortcut
						type="primary"
						character={ character }
						onUse={ () => setIsPopoverActive( ! isPopoverActive ) }
					/>
				</Fragment>
				{ specialCharsPopover }
			</Fragment>
		);
	},
} );
