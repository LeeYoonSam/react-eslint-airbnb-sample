module.exports = {
	parser: 'babel-eslint',
	plugins: ['react'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		'no-unused-vars': 0,
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-tabs': 0,
	},
	// "extends": ["eslint:recommended", "plugin:react/recommended"]
	extends: ['airbnb-base'],
};
