module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['kan-game', '/^poi-/', 'title-bar', 'webview'],
      },
    ],
    'block-no-empty': null,
    'declaration-colon-newline-after': null,
    'value-keyword-case': ['lower', { ignoreKeywords: [/dummyValue/] }],
    'keyframes-name-pattern': null,
  },
  overrides: [
    {
      files: ['**/*.es'],
      processors: [
        [
          'stylelint-processor-styled-components',
          {
            parserPlugins: [
              'jsx',
              'objectRestSpread',
              ['decorators', { decoratorsBeforeExport: true }],
              'classProperties',
              'exportExtensions',
              'asyncGenerators',
              'functionBind',
              'functionSent',
              'dynamicImport',
              'optionalCatchBinding',
              'optionalChaining',
              'doExpressions',
              'exportDefaultFrom',
            ],
          },
        ],
      ],
    }
  ]
}
