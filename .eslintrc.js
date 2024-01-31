module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'max-len': ['error', { code: 120 }],
  },
};
