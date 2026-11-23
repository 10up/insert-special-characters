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
	 * Restores the global script registry and removes the registered setting after each test.
	 */
	public function tear_down(): void {
		unset( $GLOBALS['wp_scripts'] );
		unregister_setting( 'writing', 'tenup_isc_most_read_palette' );

		parent::tear_down();
	}

	/**
	 * Provides what Settings > Writing submits for the checkbox and the palette state it should produce.
	 *
	 * `wp-admin/options.php` passes the posted value to `update_option()`, or
	 * null when the checkbox is unchecked and so absent from the request.
	 *
	 * @return array<string, array{0: string|null, 1: bool}>
	 */
	public function data_settings_form_submissions(): array {
		return array(
			'checked'   => array( 'on', true ),
			'unchecked' => array( null, false ),
		);
	}

	/**
	 * Tests that saving Settings > Writing through the registered setting keeps the palette state the user chose.
	 *
	 * A sanitize callback or type change that stores anything other than `'on'`
	 * for a checked box would silently turn the palette off.
	 *
	 * @dataProvider data_settings_form_submissions
	 *
	 * @param string|null $submitted Value `options.php` saves for the checkbox.
	 * @param bool        $expected  Whether the palette should be on.
	 */
	public function test_saving_settings_form_keeps_chosen_palette_state( ?string $submitted, bool $expected ): void {
		require_once ABSPATH . 'wp-admin/includes/template.php';
		\InsertSpecialCharacters\register_settings_fields();

		update_option( 'tenup_isc_most_read_palette', $submitted );

		$this->assertSame( $expected, \InsertSpecialCharacters\get_most_used_palette_setting() );
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
