
module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
      },
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': ['warn', { allow: ['info', 'error'] }],
      'arrow-parens': ['error', 'always'],
      'prefer-const':'error',
      "react/prop-types": ["error", { "ignore": ["navigation"] }]
    },
  };