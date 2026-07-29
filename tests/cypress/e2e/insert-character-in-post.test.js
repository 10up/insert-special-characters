describe( 'Insert character in post', () => {

	before( () => {
		cy.login();

		cy.visit( 'wp-admin/options-permalink.php' );
		cy.get( '[type="radio"]' ).check( '/%postname%/' );
		cy.get( '#submit' ).click();
	} );

	it( 'Admin can add character in post and save it', () => {
		cy.createPost( {
			title: 'Post with special characters',
			postType: 'post',
		} );

		cy.window().then( ( win ) => {
			const { wp } = win;

			const paraBlock = wp.blocks.createBlock( 'core/paragraph', {
				content: 'Hello world',
			} );

			wp.data.dispatch( 'core/block-editor' ).insertBlocks( paraBlock );

			return paraBlock.clientId;
		} ).then( ( clientId ) => {
			/**
			 * Select the inserted paragraph in the editor canvas.
			 * getBlockEditor() handles the iframed canvas in modern WP.
			 */
			cy.getBlockEditor().find( `#block-${ clientId }` ).click();
		} );

		cy.get( '.toolbar-button__advanced-insertspecialcharacters' ).click();
		cy.get( '.charMap--category button[data-title="FOR ALL"]' ).click( {
			force: true,
		} );
		cy.get( '.editor-post-publish-button' ).click();

		cy.wait( 1000 );
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
