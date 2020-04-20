<?php
/**
 * Test case class that provides us with some helper functionality.
 *
 * @package insert-special-characters
 */

/**
 * Class extends \WPAcceptance\PHPUnit\TestCase
 */
class TestCaseBase extends \WPAcceptance\PHPUnit\TestCase {
    /**
	 * Dismiss the Gutenberg NUX tooltip.
	 *
	 * @param \WPAcceptance\PHPUnit\Actor $actor The actor.
	 */
	protected function dismissNUXTip( $actor ) {
        if ( $actor->getElement( '.edit-post-welcome-guide' ) ) {
            $actor->click( '.edit-post-welcome-guide .components-modal__header > button' );
        }
	}
}
