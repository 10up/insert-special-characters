/**
 * External dependencies
 */
import { execFileSync } from 'child_process';

/**
 * WordPress dependencies
 */
import { test, expect } from '@wordpress/e2e-test-utils-playwright';
import type { Admin, Editor } from '@wordpress/e2e-test-utils-playwright';
import type { Page } from '@playwright/test';

/**
 * Deletes the palette option so the site is back to its unset default.
 *
 * The option is only registered on `admin_init`, so the REST settings endpoint
 * can't reach it. WP-CLI in the test environment can.
 */
function deletePaletteOption() {
	execFileSync(
		'npm',
		[
			'run',
			'--silent',
			'wp-env:test',
			'--',
			'run',
			'cli',
			'wp',
			'option',
			'delete',
			'tenup_isc_most_read_palette',
		],
		{ stdio: 'ignore' }
	);
}

/**
 * Opens a new post with one paragraph and opens the character map at its end.
 *
 * @param {Object} fixtures        Test fixtures.
 * @param {Admin}  fixtures.admin  Admin utils.
 * @param {Editor} fixtures.editor Editor utils.
 * @param {Page}   fixtures.page   Current page.
 */
async function openMapInNewPost( {
	admin,
	editor,
	page,
}: {
	admin: Admin;
	editor: Editor;
	page: Page;
} ) {
	await admin.createNewPost();
	await editor.insertBlock( {
		name: 'core/paragraph',
		attributes: { content: 'Hello' },
	} );
	await editor.canvas
		.getByRole( 'document', { name: 'Block: Paragraph' } )
		.click();
	await page.keyboard.press( 'End' );

	await editor.clickBlockToolbarButton( 'Special Characters' );
	await expect(
		page.getByRole( 'button', { name: '∀', exact: true } ).first()
	).toBeVisible();
}

/**
 * Picks "∀" from the open character map, then reopens the map.
 *
 * @param {Object} fixtures        Test fixtures.
 * @param {Editor} fixtures.editor Editor utils.
 * @param {Page}   fixtures.page   Current page.
 */
async function pickCharacterAndReopenMap( {
	editor,
	page,
}: {
	editor: Editor;
	page: Page;
} ) {
	await page.getByRole( 'button', { name: '∀', exact: true } ).last().click();
	await expect
		.poll( editor.getBlocks )
		.toMatchObject( [ { attributes: { content: 'Hello∀' } } ] );

	await editor.clickBlockToolbarButton( 'Special Characters' );
	await expect(
		page.getByRole( 'button', { name: '∀', exact: true } ).first()
	).toBeVisible();
}

/**
 * Sets the palette checkbox on Settings > Writing and saves.
 *
 * @param {Page}    page    Current page.
 * @param {boolean} checked Whether the palette should be enabled.
 */
async function setPaletteSetting( page: Page, checked: boolean ) {
	await page.goto( '/wp-admin/options-writing.php' );
	await page
		.getByRole( 'checkbox', { name: /most used character/i } )
		.setChecked( checked );
	await page.getByRole( 'button', { name: 'Save Changes' } ).click();
	await expect( page.getByText( 'Settings saved.' ) ).toBeVisible();
}

test.describe( 'Most used characters palette', () => {
	test.beforeAll( deletePaletteOption );

	test.afterEach( async ( { requestUtils } ) => {
		deletePaletteOption();
		await requestUtils.deleteAllPosts();
	} );

	test( 'is shown by default and lists picked characters', async ( {
		admin,
		editor,
		page,
	} ) => {
		await openMapInNewPost( { admin, editor, page } );
		await pickCharacterAndReopenMap( { editor, page } );

		await expect(
			page
				.getByRole( 'list', { name: 'Most Used' } )
				.getByRole( 'button', { name: '∀', exact: true } )
		).toBeVisible();
	} );

	test( 'is hidden when turned off in Settings > Writing', async ( {
		admin,
		editor,
		page,
	} ) => {
		await setPaletteSetting( page, false );

		await openMapInNewPost( { admin, editor, page } );
		await pickCharacterAndReopenMap( { editor, page } );

		await expect(
			page.getByRole( 'list', { name: 'Most Used' } )
		).toHaveCount( 0 );
	} );

	test( 'is emptied by the Clear palette button', async ( {
		admin,
		editor,
		page,
	} ) => {
		await openMapInNewPost( { admin, editor, page } );
		await pickCharacterAndReopenMap( { editor, page } );
		await expect(
			page.getByRole( 'list', { name: 'Most Used' } )
		).toBeVisible();

		await page.goto( '/wp-admin/options-writing.php' );
		await page.getByRole( 'button', { name: 'Clear palette' } ).click();
		await expect(
			page.getByRole( 'button', { name: 'Palette cleared' } )
		).toBeVisible();

		await openMapInNewPost( { admin, editor, page } );
		await expect(
			page.getByRole( 'list', { name: 'Most Used' } )
		).toHaveCount( 0 );
	} );
} );
