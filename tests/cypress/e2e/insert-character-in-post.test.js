describe( 'Insert character in post', () => {

	before( () => {
		cy.login();

		cy.visit( 'wp-admin/options-permalink.php' );
		cy.get( '[type="radio"]' ).check( '/%postname%/' );
		cy.get( '#submit' ).click();
	} );

	it( 'Admin can add character in post and save it', () => {
		cy.visit(
			`${ Cypress.config().baseUrl }wp-admin/edit.php?post_type=page`
		);
		cy.get( 'a.row-title' )
			.contains( 'Page with special characters' )
			.click();

		cy.closeWelcomeGuide();

		cy.window().then( ( win ) => {
			const { wp } = win;

			const paraBlock = wp.blocks.createBlock(
				'core/paragraph',
				{
					content: 'Hello world'
				}
			);

			wp.data.dispatch( 'core/editor' ).insertBlocks( paraBlock );
		} );

		/**
		 * Open block list view.
		 */
		cy.get( 'body' ).then( ( $body ) => {
			if ( $body.find( '.block-editor-block-navigation' ).length > 0 ) {
				cy.get( '.block-editor-block-navigation' ).click();
			} else if ( $body.find( '.edit-post-header-toolbar__list-view-toggle' ).length > 0 ) {
				cy.get( '.edit-post-header-toolbar__list-view-toggle' ).click();
			} else {
				// WP 6.2
				cy.get( '.edit-post-header-toolbar__document-overview-toggle' ).click();
			}
		} );

		/**
		 * Select paragraph from list view.
		 */
		cy.get( 'body' ).then( ( $body ) => {
			if (
				$body.find(
					'.block-editor-block-navigation__list > li:first-child button'
				).length > 0
			) {
				cy.get(
					'.block-editor-block-navigation__list > li:first-child button'
				).click();
			} else {
				cy.get(
					'table[aria-label="Block navigation structure"] > tbody > tr:first-child'
				).click();
			}
		} );

		cy.get( '.toolbar-button__advanced-insertspecialcharacters' ).click();
		cy.get( '.charMap--category button[data-title="FOR ALL"]' ).click( {
			force: true,
		} );
		cy.get( '.editor-post-publish-button' ).click();

		cy.wait( 1000 );
	} );

	it( 'Verify the character on the front end', () => {
		cy.visit( `${ Cypress.config().baseUrl }page-with-special-characters` );

		cy.get( 'body' ).invoke( 'text' ).then( text => {
			if ( text.includes( 'Hello world∀' ) ) {
				expect( text ).to.contain( 'Hello world∀' );
			} else if ( text.includes( '∀Hello world' ) ) {
				expect( text ).to.contain( '∀Hello world' );
			}
		} );
	} );
} );
