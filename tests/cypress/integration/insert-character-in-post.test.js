describe( 'Insert character in post', () => {
	before( () => {
		cy.visit( `${ Cypress.config().baseUrl }wp-admin` );
		cy.get( '#user_login' ).type( 'admin' );
		cy.get( '#user_pass' ).type( 'password' );
		cy.get( '#wp-submit' ).click();
	} );

	it( 'Admin can add character in post and save it', () => {
		cy.visit(
			`${ Cypress.config().baseUrl }wp-admin/edit.php?post_type=page`
		);
		cy.get( 'a.row-title' )
			.contains( 'Page with special characters' )
			.click();

		cy.get( 'button[aria-label="Close dialog"]' ).click();

		cy.get( '.edit-post-header-toolbar__inserter-toggle' ).click();
		cy.get( '.components-search-control__input' ).type( 'Paragraph' );
		cy.get( '.editor-block-list-item-paragraph' ).click();

		cy.get( '.wp-block-paragraph' )
			.click()
			.type( 'Hello world' );
		cy.get( '.edit-post-header-toolbar__list-view-toggle' ).click();
		cy.get(
			'table[aria-label="Block navigation structure"] > tbody > tr:first-child'
		).click();

		cy.get( '.toolbar-button__advanced-insertspecialcharacters' ).click();
		cy.get( '.charMap--category button[data-title="FOR ALL"]' ).click( {
			force: true,
		} );
		cy.get( '.editor-post-publish-button' ).click();
	} );

	it( 'Verify the character on the front end', () => {
		cy.visit( `${ Cypress.config().baseUrl }page-with-special-characters` );
		cy.contains( 'Hello world∀' );
	} );
} );
