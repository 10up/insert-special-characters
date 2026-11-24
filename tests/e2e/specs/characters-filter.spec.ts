/**
 * WordPress dependencies
 */
import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe( 'insertspecialcharacters-characters filter', () => {
	test.afterEach( async ( { requestUtils } ) => {
		await requestUtils.deleteAllPosts();
	} );

	test( 'replaces the characters the map offers', async ( {
		admin,
		editor,
		page,
	} ) => {
		await admin.createNewPost();

		// Same shape as the README example: a currency-only character set.
		await page.evaluate( () => {
			window.wp.hooks.addFilter(
				'insertspecialcharacters-characters',
				'isc-e2e/currency-only',
				() => ( {
					Currency: [
						{
							entity: '&euro;',
							hex: '&#20AC;',
							name: 'Euro Sign',
							char: '€',
						},
						{
							entity: '&pound;',
							hex: '&#00A3;',
							name: 'Pound Sign',
							char: '£',
						},
					],
				} )
			);
		} );

		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Price' },
		} );
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Paragraph' } )
			.click();
		await page.keyboard.press( 'End' );

		await editor.clickBlockToolbarButton( 'Special Characters' );

		// A default character is gone and the filtered ones are offered.
		await expect(
			page.getByRole( 'button', { name: '∀', exact: true } )
		).toHaveCount( 0 );
		await page.getByRole( 'button', { name: '€', exact: true } ).click();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: { content: 'Price€' },
			},
		] );
	} );
} );
