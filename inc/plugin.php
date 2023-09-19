<?php
/**
 * Registers JS and CSS assets.
 *
 * @package insert-special-characters
 */

namespace InsertSpecialCharacters;

/**
 * Registers JS and CSS assets.
 */
function register_assets() {
	$asset_data_file = trailingslashit( ISC_PLUGIN_PATH ) . 'build/index.asset.php';

	if ( ! file_exists( $asset_data_file ) ) {
		return;
	}

	$script_data = include $asset_data_file;

	wp_register_script(
		'insert-special-characters',
		ISC_PLUGIN_URL . 'build/index.js',
		$script_data['dependencies'],
		$script_data['version'],
		true
	);

	wp_register_style(
		'insert-special-characters-css',
		ISC_PLUGIN_URL . 'build/index.css',
		array(),
		$script_data['version']
	);

	wp_set_script_translations( 'insert-special-characters', 'insert-special-characters', ISC_PLUGIN_PATH . 'languages' );
}

add_action( 'init', __NAMESPACE__ . '\register_assets' );


/**
 * Enqueue the admin JavaScript assets.
 */
function gcm_block_enqueue_scripts() {

	wp_enqueue_script( 'insert-special-characters' );

	wp_enqueue_style( 'insert-special-characters-css' );

	wp_add_inline_script(
		'insert-special-characters',
		sprintf(
			'var tenupIscVars = window.tenupIscVars || {}; tenupIscVars = %1$s',
			wp_json_encode(
				array(
					'most_read_palette' => get_most_used_palette_setting(),
				)
			)
		)
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\gcm_block_enqueue_scripts' );

/**
 * Registers settings fields.
 */
function register_settings_fields() {
	register_setting(
		'writing',
		'tenup_isc_most_read_palette',
		array(
			'type'         => 'boolean',
			'show_in_rest' => true,
			'default'      => false,
		)
	);

	add_settings_section(
		'tenup_isc_writing_section',
		esc_html__( 'Insert Special Characters', 'insert-special-characters' ),
		null,
		'writing'
	);

	add_settings_field(
		'tenup_isc_most_read_palette',
		esc_html__( 'Most used characters palette', 'insert-special-characters' ),
		__NAMESPACE__ . '\render_isc_writing_setting',
		'writing',
		'tenup_isc_writing_section',
		array(
			'label_for' => 'tenup_isc_most_read_palette',
		)
	);
}
add_action( 'admin_init', __NAMESPACE__ . '\register_settings_fields' );

/**
 * Renders settings fields.
 */
function render_isc_writing_setting() {
	$option = get_most_used_palette_setting();
	?>
	<p>
		<label for="tenup_isc_most_read_palette">
			<input
				type="checkbox"
				name="tenup_isc_most_read_palette"
				id="tenup_isc_most_read_palette"
				<?php checked( $option, true, true ); ?>
			>
			<?php esc_html_e( 'Check this to enable the most used character palette.', 'insert-special-characters' ); ?>
		</label>
	</p>

	<?php if ( $option ) : ?>
		<p>
			<button class="button secondary" id="isc_reset_palette" type="button" style="margin-top: 16px;">
				<?php esc_html_e( 'Clear palette', 'insert-special-characters' ); ?>
			</button>
			&nbsp;
			<?php esc_html_e( 'Press this to clear palette data.', 'insert-special-characters' ); ?>
		</p>
		<?php
	endif;
}

/**
 * Helper function to get most used character palette setting.
 *
 * @return boolean
 */
function get_most_used_palette_setting() {
	return 'on' === get_option( 'tenup_isc_most_read_palette' );
}

/**
 * Loads admin scripts.
 *
 * @param string $hook The current admin page.
 */
function load_admin_scripts( $hook ) {
	if ( 'options-writing.php' !== $hook ) {
		return;
	}

	$asset_data_file = trailingslashit( ISC_PLUGIN_PATH ) . 'build/admin.asset.php';

	if ( ! file_exists( $asset_data_file ) ) {
		return;
	}

	$script_data = include $asset_data_file;

	wp_enqueue_script(
		'insert-special-characters-admin-js',
		ISC_PLUGIN_URL . 'build/admin.js',
		$script_data['dependencies'],
		$script_data['version'],
		true
	);

	wp_localize_script(
		'insert-special-characters-admin-js',
		'tenupIscAdminVars',
		array(
			'palette_deleted_message' => __( 'Palette cleared', 'insert-special-characters' ),
		)
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\load_admin_scripts' );
