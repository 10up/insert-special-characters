// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Close the welcome guide via the preferences/data store.
 *
 * More reliable than the DOM-click approach in cypress-wp-utils, which can race
 * on slower CI runners (guide not mounted yet) and depends on getBlockEditor()
 * finding the iframed title input before the modal is dismissed.
 */
Cypress.Commands.overwrite( 'closeWelcomeGuide', () => {
	cy.window( { timeout: 10000 } ).should( ( win ) => {
		expect( win.wp?.data ).to.exist;
	} );

	cy.window().then( ( win ) => {
		const { dispatch, select } = win.wp.data;

		// WP 6.5+: preferences store
		if ( select( 'core/preferences' ) ) {
			dispatch( 'core/preferences' ).set(
				'core/edit-post',
				'welcomeGuide',
				false
			);
		}

		// Older WP: edit-post feature flag
		if ( select( 'core/edit-post' )?.isFeatureActive?.( 'welcomeGuide' ) ) {
			dispatch( 'core/edit-post' ).toggleFeature( 'welcomeGuide' );
		}
	} );

	cy.get( '.edit-post-welcome-guide' ).should( 'not.exist' );
} );
