<?php
/**
 * Plugin Name:       Insert Special Characters
 * Plugin URI:        https://github.com/10up/insert-special-characters
 * Description:       A Special Character inserter for the WordPress block editor (Gutenberg).
 * Version:           1.0.4
 * Requires at least: 5.4
 * Requires PHP:      5.6
 * Author:            10up
 * Author URI:        https://10up.com
 * License:           GPLv2
 * License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain:       insert-special-characters
 *
 * @package insert-special-characters
 */
namespace InsertSpecialCharacters;

 /**
  * Enqueue the admin JavaScript assets.
  */
function gcm_block_enqueue_scripts() {
	$asset_data_file = trailingslashit( plugin_dir_path( __FILE__ ) ) . 'build/index.asset.php';

	if ( ! file_exists( $asset_data_file ) ) {
		return;
	}

	$script_data = include $asset_data_file;

	wp_enqueue_script(
		'insert-special-characters',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$script_data['dependencies'],
		$script_data['version'],
		true
	);
	
	wp_set_script_translations( 'insert-special-characters', 'insert-special-characters' );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\gcm_block_enqueue_scripts' );
