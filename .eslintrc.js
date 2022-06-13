const defaultConfig = require('@wordpress/scripts/config/.eslintrc.js' );
module.exports = {
	...defaultConfig,
	ignorePatterns: [
		"tests/cypress/fixures",
		"tests/cypress/plugins",
		"tests/cypress/support",
		"tests/bin"
	],
	"globals": {
		"Cypress": "readonly",
		"cy": "readonly",
		"before": "readonly",
	}
};
