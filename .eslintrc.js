module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ]
  },
  globals: {
    window: true,
    document: true,
    fetch: false
  },
  parser: 'babel-eslint'
};
