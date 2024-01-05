<?php
/**
 * Plugin Name:       Insert Special Characters
 * Plugin URI:        https://github.com/10up/insert-special-characters
 * Description:       A Special Character inserter for the WordPress block editor (Gutenberg).
 * Version:           1.1.2
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            10up
 * Author URI:        https://10up.com
 * License:           GPLv2
 * License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain:       insert-special-characters
 *
 * @package insert-special-characters
 */

namespace InsertSpecialCharacters;

define( 'ISC_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'ISC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Get the minimum version of PHP required by this plugin.
 *
 * @since 1.0.8
 *
 * @return string Minimum version required.
 */
function minimum_php_requirement() {
	return '7.4';
}

/**
 * Whether PHP installation meets the minimum requirements
 *
 * @since 1.0.8
 *
 * @return bool True if meets minimum requirements, false otherwise.
 */
function site_meets_php_requirements() {
	return version_compare( phpversion(), minimum_php_requirement(), '>=' );
}

// Try to load the plugin files, ensuring our PHP version is met first.
if ( ! site_meets_php_requirements() ) {
	add_action(
		'admin_notices',
		function() {
			?>
			<div class="notice notice-error">
				<p>
					<?php
					echo wp_kses_post(
						sprintf(
							/* translators: %s: Minimum required PHP version */
							__( 'Insert Special Characters requires PHP version %s or later. Please upgrade PHP or disable the plugin.', 'insert-special-characters' ),
							esc_html( minimum_php_requirement() )
						)
					);
					?>
				</p>
			</div>
			<?php
		}
	);
	return;
}

if ( ! site_meets_php_requirements() ) {
	return;
}

require_once __DIR__ . '/inc/plugin.php';
