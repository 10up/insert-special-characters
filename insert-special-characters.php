<?php
/**
 * Plugin Name:       Insert Special Characters
 * Plugin URI:        https://github.com/10up/insert-special-characters
 * Description:       Insert special characters in the block editor (Gutenberg).
 * Version:           0.9.0
 * Author:            10up
 * Author URI:        http://10up.com
 * License:           MIT
 * License URI:       http://www.gnu.org/licenses/mit.html
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
