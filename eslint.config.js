const defaultConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...defaultConfig,
	{
		ignores: [ 'eslint.config.js', 'webpack.config.js' ],
	},
	{
		languageOptions: {
			globals: {
				tenupIscVars: 'readonly',
				tenupIscAdminVars: 'readonly',
				localStorage: 'readonly',
				jQuery: 'readonly',
				Node: 'readonly',
			},
		},
		settings: {
			'import/core-modules': [
				'@wordpress/api-fetch',
				'@wordpress/block-editor',
				'@wordpress/components',
				'@wordpress/compose',
				'@wordpress/data',
				'@wordpress/date',
				'@wordpress/edit-post',
				'@wordpress/element',
				'@wordpress/hooks',
				'@wordpress/i18n',
				'@wordpress/keycodes',
				'@wordpress/plugins',
				'@wordpress/primitives',
				'@wordpress/rich-text',
			],
		},
	},
];
