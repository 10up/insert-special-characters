( function( $ ) {
	const resetPaletteBtnEl = $( '#isc_reset_palette' );

	/**
	 * Clears the most used palette when the 'Clear palette'
	 * button is clicked.
	 */
	resetPaletteBtnEl.on( 'click', function() {
		localStorage.removeItem( 'dayjoReactCharPalette' );
		const currentTextBackup = resetPaletteBtnEl.text();
		resetPaletteBtnEl.text( tenupIscAdminVars.palette_deleted_message );

		setTimeout( () => {
			resetPaletteBtnEl.text( currentTextBackup );
		}, 2000 );
	} );
} )( jQuery );
