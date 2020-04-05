import { CharacterMap } from 'react-character-map';
import { Component } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { removeFormat, replace } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
import { getRectangleFromRange } from '@wordpress/dom';
import Chars from 'react-character-map/dist/component/chars.json';

import { cursorFormatType, HAIR_SPACE } from '.';

export class SpecialCharactersPopover extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			char: '',
			characters: null,
			cursorCleanedUp: false,
		};

		this.getAnchorRect = this.getAnchorRect.bind( this );
		this.close = this.close.bind( this );
	}

	componentDidMount() {
		// Place characters in state so that filters are only applied once.
		this.setState( {
			characters: applyFilters( `${ name }-characters`, Chars ),
		} );
	}

	componentDidUpdate( { char } ) {
		if ( char !== this.state.char && '' !== this.state.char ) {
			this.close();
		}
	}

	componentWillUnmount() {
		if ( false === this.state.cursorCleanedUp ) {
			this.close();
		}
	}

	getAnchorRect() {
		return getRectangleFromRange( this.props.anchorRange );
	}

	close() {
		const { onChange, value } = this.props;
		const { char } = this.state;

		let newValue = removeFormat( value, cursorFormatType, 0 );
		newValue = replace( newValue, HAIR_SPACE, char );

		onChange( newValue );

		this.setState( { cursorCleanedUp: true } );
	}

	render() {
		const { characters } = this.state;

		return (
			<Popover
				className="character-map-popover"
				position="bottom center"
				focusOnMount="container"
				key="charmap-popover"
				onClick={ () => {} }
				getAnchorRect={ this.getAnchorRect }
				expandOnMobile={ true }
				headerTitle={ __(
					'Insert Special Character',
					'insert-special-characters'
				) }
				onClose={ this.close }
			>
				<CharacterMap
					characterData={ characters }
					onSelect={
						// Insert the selected character and close the popover.
						( char ) => {
							this.setState( { char: char.char } );
						}
					}
					categoryNames={ {
						Arrows: __( 'Arrows', 'insert-special-characters' ),
						Latin: __( 'Latin', 'insert-special-characters' ),
						Math: __( 'Math', 'insert-special-characters' ),
						Misc: __( 'Misc', 'insert-special-characters' ),
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
				/>
			</Popover>
		);
	}
}
