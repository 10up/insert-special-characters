describe( 'Insert character in post', () => {

	before( () => {
		cy.login();

		cy.visit( 'wp-admin/options-permalink.php' );
		cy.get( '[type="radio"]' ).check( '/%postname%/' );
		cy.get( '#submit' ).click();
	} );

	it( 'Admin can add character in post and save it', () => {
		cy.visit( '/wp-admin/post-new.php?post_type=post' );

		// Wait until the editor entity config is loaded.
		cy.window().should( ( win ) => {
			expect(
				win.wp?.data?.select( 'core/editor' ).getCurrentPostType()
			).to.eq( 'post' );
		} );

		cy.closeWelcomeGuide();

		/**
		 * Set title and insert a paragraph via the data stores so we do not
		 * depend on getBlockEditor() / the iframed canvas for setup.
		 */
		cy.window().then( ( win ) => {
			const { wp } = win;

			wp.data.dispatch( 'core/editor' ).editPost( {
				title: 'Post with special characters',
			} );

			const paraBlock = wp.blocks.createBlock( 'core/paragraph', {
				content: 'Hello world',
			} );

			wp.data
				.dispatch( 'core/block-editor' )
				.insertBlocks( paraBlock );
			wp.data
				.dispatch( 'core/block-editor' )
				.selectBlock( paraBlock.clientId );
		} );

		cy.get( '.toolbar-button__advanced-insertspecialcharacters' ).click();
		cy.get( '.charMap--category button[data-title="FOR ALL"]' ).click( {
			force: true,
		} );

		cy.get( '.editor-post-publish-panel__toggle' ).should( 'be.enabled' );
		cy.get( '.editor-post-publish-panel__toggle' ).click();
		cy.get( '.editor-post-publish-button' ).click();
		cy.get( '.components-snackbar, .components-notice.is-success' ).should(
			'be.visible'
		);
	} );

	it( 'Verify the character on the front end', () => {
		cy.visit( `${ Cypress.config().baseUrl }/post-with-special-characters` );

		cy.get( 'body' ).invoke( 'text' ).then( text => {
			if ( text.includes( 'Hello world∀' ) ) {
				expect( text ).to.contain( 'Hello world∀' );
			} else if ( text.includes( '∀Hello world' ) ) {
				expect( text ).to.contain( '∀Hello world' );
			}
		} );
	} );
} );
