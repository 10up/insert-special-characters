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

		// Put the caret after "Hello", away from either end of the text.
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Paragraph' } )
			.click();
		await page.keyboard.press( 'End' );
		for ( let i = 0; i < ' world'.length; i++ ) {
			await page.keyboard.press( 'ArrowLeft' );
		}

		await editor.clickBlockToolbarButton( 'Special Characters' );
		// The character map renders each character as a button named by the character itself.
		await page.getByRole( 'button', { name: '∀', exact: true } ).click();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: { content: 'Hello∀ world' },
			},
		] );

		const postId = await editor.publishPost();

		await page.goto( `/?p=${ postId }` );
		await expect( page.getByText( 'Hello∀ world' ) ).toBeVisible();
	} );

	test( 'a character inserted inside formatted text keeps that formatting', async ( {
		admin,
		editor,
		page,
		pageUtils,
	} ) => {
		await admin.createNewPost();
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Hello <strong>bold</strong> world' },
		} );

		// Put the caret between "bo" and "ld". Set it through the store: arrow
		// keys spend an extra press crossing a format boundary.
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Paragraph' } )
			.click();
		await page.evaluate( ( offset ) => {
			const { select, dispatch } = window.wp.data;
			const clientId =
				select( 'core/block-editor' ).getSelectedBlockClientId();
			dispatch( 'core/block-editor' ).selectionChange(
				clientId,
				'content',
				offset,
				offset
			);
		}, 'Hello bo'.length );

		// Open the character map with its keyboard shortcut.
		await pageUtils.pressKeys( 'primary+o' );
		await page.getByRole( 'button', { name: '∀', exact: true } ).click();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content: 'Hello <strong>bo∀ld</strong> world',
				},
			},
		] );
	} );

	test( 'a character replaces the selected text without breaking the block', async ( {
		admin,
		editor,
		page,
	} ) => {
		await admin.createNewPost();
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Hello world' },
		} );

		// Select "world".
		await editor.canvas
			.getByRole( 'document', { name: 'Block: Paragraph' } )
			.click();
		await page.keyboard.press( 'End' );
		for ( let i = 0; i < 'world'.length; i++ ) {
			await page.keyboard.press( 'Shift+ArrowLeft' );
		}

		await editor.clickBlockToolbarButton( 'Special Characters' );
		await page.getByRole( 'button', { name: '∀', exact: true } ).click();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: { content: 'Hello ∀' },
			},
		] );
		await expect(
			editor.canvas.getByText( 'This block has encountered an error' )
		).toHaveCount( 0 );
	} );
} );
