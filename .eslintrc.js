module.exports = {
  extends: ['anvilabs', 'anvilabs/flowtype'],
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/no-weak-types': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
  },
};
