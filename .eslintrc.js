const defaultConfig = require( '@wordpress/scripts/config/.eslintrc.js' );
module.exports = {
	...defaultConfig,
	ignorePatterns: [
		"tests/cypress/fixures",
		"tests/cypress/plugins",
		"tests/cypress/support",
		"tests/bin",
		"vendor",
		".eslintrc.js",
		"webpack.config.js",
	],
	"globals": {
		"Cypress": "readonly",
		"cy": "readonly",
		"before": "readonly",
		"tenupIscVars": "readonly",
		"tenupIscAdminVars": "readonly",
		"localStorage": "readonly",
		"jQuery": "readonly",
		"Node": "readonly",
	}
};
