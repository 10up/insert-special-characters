<?php
/**
 * EditorTest class.
 *
 * @package insert-special-characters
 */

/**
 * PHPUnit test class
 */
class EditorTest extends \TestCaseBase {

	/**
	 * Basic test of plugin functionality.
	 */
	public function testInsertCharacter() {
		$we = $this->openBrowserPage();
		$we->login();

		$we->moveTo( 'wp-admin/post.php?post=3&action=edit' );

		$this->dismissNUXTip( $we );

		$we->scrollToElement( '.wp-block-paragraph' );
		$we->click( '.wp-block-paragraph' );

		$we->waitUntilElementVisible( '.block-editor-format-toolbar .components-dropdown-menu__toggle' );
		$we->click( '.block-editor-format-toolbar .components-dropdown-menu__toggle' );

		$we->waitUntilElementVisible( '.components-dropdown-menu__menu-item' );
		$we->seeText( 'Special Characters' );

		$we->click( '.components-dropdown-menu__menu .components-dropdown-menu__menu-item:nth-of-type(3)' );

		$we->waitUntilElementVisible( '.character-map-popover' );
		$we->scrollToElement( '[data-hex="&#25A6;"]' );
		$we->click( '[data-hex="&#25A6;"]' );

		$we->waitUntilElementVisible( '.wp-block-paragraph' );
		$we->seeText( '▦', '.wp-block-paragraph' );
	}
}
