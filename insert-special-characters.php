<?php
/**
 * Plugin Name:       Insert Special Characters
 * Plugin URI:        https://github.com/10up/insert-special-characters
 * Description:       A Special Character inserter for the WordPress block editor (Gutenberg).
 * Version:           1.0.1
 * Requires at least: 5.2
 * Requires PHP:      5.6
 * Author:            10up
 * Author URI:        https://10up.com
 * License:           MIT
 * License URI:       https://www.gnu.org/licenses/mit.html
 * Text Domain:       insert-special-characters
 *
 * @package insert-special-characters
 */
namespace InsertSpecialCharacters;

 /**
  * Enqueue the admin JavaScript assets.
  */
function gcm_block_enqueue_scripts() {

	wp_enqueue_script(
		'insert-special-characters',
		plugin_dir_url( __FILE__ ) . 'dist/insert-special-characters.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-editor' ),
		'',
		true
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\gcm_block_enqueue_scripts' );
