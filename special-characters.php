<?php
/**
 * Plugin Name:       Gutenberg Character Map
 * Plugin URI:        https://github.com/10up/gutenberg-special-characters
 * Description:       Insert special characters within the Gutenberg editor.
 * Version:           1.0.0
 * Author:            10up
 * Author URI:        http://10up.com
 * License:           MIT
 * License URI:       http://www.gnu.org/licenses/mit.html
 * Text Domain:       character-map
 *
 * @package character-map
 */
namespace GutenbergCharacterMap;

 /**
  * Enqueue the admin JavaScript assets.
  */
function gcm_block_enqueue_scripts() {

	wp_enqueue_script(
		'character-map',
		plugin_dir_url( __FILE__ ) . 'dist/special-characters.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-editor' ),
		'',
		true
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\gcm_block_enqueue_scripts' );
