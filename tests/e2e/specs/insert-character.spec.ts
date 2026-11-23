/**
 * WordPress dependencies
 */
import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe( 'Insert special character', () => {
	test.afterEach( async ( { requestUtils } ) => {
		await requestUtils.deleteAllPosts();
	} );

	test( 'inserts the chosen character at the caret and it is saved and shown on the front end', async ( {
		admin,
		editor,
		page,
	} ) => {
		await admin.createNewPost( { title: 'Post with special characters' } );
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Hello world' },
		} );

		// Put the caret at the end of the paragraph.
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Paragraph' } )
			.click();
		await page.keyboard.press( 'End' );

		await editor.clickBlockToolbarButton( 'Special Characters' );
		// The character map renders each character as a button named by the character itself.
		await page.getByRole( 'button', { name: '∀', exact: true } ).click();

		await expect
			.poll( editor.getBlocks )
			.toMatchObject( [
				{
					name: 'core/paragraph',
					attributes: { content: 'Hello world∀' },
				},
			] );

		const postId = await editor.publishPost();

		await page.goto( `/?p=${ postId }` );
		await expect( page.getByText( 'Hello world∀' ) ).toBeVisible();
	} );
} );
