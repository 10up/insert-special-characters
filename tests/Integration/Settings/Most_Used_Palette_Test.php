<?php
/**
 * Tests the "Most used characters palette" setting.
 *
 * @package insert-special-characters
 */

namespace InsertSpecialCharacters\Tests\Integration\Settings;

use WP_UnitTestCase;

/**
 * Checks which palette state the block editor script receives for each stored
 * value of the `tenup_isc_most_read_palette` option.
 *
 * The palette is on by default: an unset option and the string `'on'` (a
 * checked box on Settings > Writing) enable it; anything else disables it.
 */
class Most_Used_Palette_Test extends WP_UnitTestCase {

	/**
	 * Starts each test with a fresh script registry holding the plugin's assets.
	 *
	 * Inline scripts accumulate on the global registry, so without this each
	 * test would read the data added by the tests before it.
	 */
	public function set_up(): void {
		parent::set_up();

		unset( $GLOBALS['wp_scripts'] );
		\InsertSpecialCharacters\register_assets();

		$this->assertTrue(
			wp_script_is( 'insert-special-characters', 'registered' ),
			'The editor script is not registered. Run `npm run build` first.'
		);
	}

	/**
	 * Restores the global script registry after each test.
	 */
	public function tear_down(): void {
		unset( $GLOBALS['wp_scripts'] );

		parent::tear_down();
	}

	/**
	 * Provides stored option values and the palette state each one produces.
	 *
	 * @return array<string, array{0: string|null, 1: bool}>
	 */
	public function data_option_values(): array {
		return array(
			'unset (default)'         => array( null, true ),
			'checked on Settings'     => array( 'on', true ),
			'unchecked on Settings'   => array( '', false ),
			'any other stored string' => array( 'off', false ),
		);
	}

	/**
	 * Tests that the editor script receives the palette state for the stored option.
	 *
	 * @dataProvider data_option_values
	 *
	 * @param string|null $stored   Option value, or null to leave it unset.
	 * @param bool        $expected Whether the palette should be on.
	 */
	public function test_editor_script_receives_palette_state( ?string $stored, bool $expected ): void {
		if ( null === $stored ) {
			delete_option( 'tenup_isc_most_read_palette' );
		} else {
			update_option( 'tenup_isc_most_read_palette', $stored );
		}

		do_action( 'enqueue_block_editor_assets' );

		$this->assertTrue( wp_script_is( 'insert-special-characters', 'enqueued' ) );
		$this->assertSame(
			array( 'most_read_palette' => $expected ),
			$this->get_editor_vars()
		);
	}

	/**
	 * Returns the `tenupIscVars` object the plugin attaches to the editor script.
	 *
	 * @return array<string, mixed>
	 */
	private function get_editor_vars(): array {
		$inline = wp_scripts()->get_inline_script_data( 'insert-special-characters', 'after' );

		$this->assertSame( 1, preg_match( '/tenupIscVars = (\{.*\})$/m', $inline, $matches ), $inline );

		return json_decode( $matches[1], true );
	}
}
