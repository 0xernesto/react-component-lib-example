module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["react", "prettier", "@typescript-eslint", "simple-import-sort"],
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	rules: {
		"no-console": ["warn"],
		"prettier/prettier": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/extensions": "off",
		"react/button-has-type": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				// Add or override TypeScript-specific rules here
			},
		},
	],
};
