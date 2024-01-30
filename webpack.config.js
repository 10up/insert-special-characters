const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        admin: [ './src/admin.js' ],
    },
    externals: {
        ...defaultConfig.externals,
        '@wordpress/components': 'wp.components',
    }
};
