describe( 'Insert character in post', () => {
	before( () => {
		cy.visit( `${ Cypress.config().baseUrl }wp-admin` );
		cy.wait( 500 );
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

		cy.get( 'body' ).then( ( $body ) => {
			// WP 5.2
			if ( $body.find( '.nux-dot-tip__disable' ).length > 0 ) {
				cy.get( '.nux-dot-tip__disable' ).click();
			} else {
				cy.get( 'button[aria-label="Close dialog"]' ).click();
			}
		} );

		/**
		 * Click block inserter.
		 */
		cy.get( 'body' ).then( ( $body ) => {
			// WP 5.2
			if (
				$body.find(
					'.edit-post-header-toolbar .block-editor-inserter__toggle'
				).length > 0
			) {
				cy.get(
					'.edit-post-header-toolbar .block-editor-inserter__toggle'
				).click();
			} else {
				cy.get( '.edit-post-header-toolbar__inserter-toggle' ).click();
			}
		} );

		/**
		 * Search for paragraph block in inserter.
		 */
		cy.get( 'body' ).then( ( $body ) => {
			// WP 5.2
			if ( $body.find( '.block-editor-inserter__search' ).length > 0 ) {
				cy.get( '.block-editor-inserter__search' ).type( 'Paragraph' );
			} else {
				cy.get( '.components-search-control__input' ).type(
					'Paragraph'
				);
			}
		} );

		cy.get( '.editor-block-list-item-paragraph' ).click();

		/**
		 * Add content to paragraph.
		 */
		cy.get( '.wp-block-paragraph' )
			.click()
			.type( 'Hello world' );

		/**
		 * Open block list view.
		 */
		cy.get( 'body' ).then( ( $body ) => {
			if ( $body.find( '.block-editor-block-navigation' ).length > 0 ) {
				cy.get( '.block-editor-block-navigation' ).click();
			} else {
				cy.get( '.edit-post-header-toolbar__list-view-toggle' ).click();
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
	} );

	it( 'Verify the character on the front end', () => {
		cy.visit( `${ Cypress.config().baseUrl }page-with-special-characters` );
		cy.contains( 'Hello world∀' );
	} );
} );
