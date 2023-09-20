module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  rules: {
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],

    'vue/max-attributes-per-line': [
      'error', {
        singleline: 16
      }
    ],

    'vue/no-unused-components': 'warn',

    'vue/multi-word-component-names': ['error', {
      ignores: ['index']
    }]
  }
}
