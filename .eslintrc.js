module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  rules: {
    'generator-star-spacing': 0,
    'no-new': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'semi': [2, 'never'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    "no-var": "error",    
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }]
  },
  globals: {
    wx: true
  }
}
