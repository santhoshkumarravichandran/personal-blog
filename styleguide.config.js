const path = require('path');
const fonts = require('./webpack/loaders/fonts');
const image = require('./webpack/loaders/image');

module.exports = {
  title: 'Atomic Design',
  pagePerSection: true,
  skipComponentsWithoutExample: false,
  sections: [
    {
      name: 'Atoms',
      components: './src/builder/components/atoms/**/*.tsx',
    },
    {
      name: 'Molecules',
      components: './src/builder/components/molecules/**/*.tsx',
    },
    // {
    //   name: 'Organisms',
    //   components: './src/builder/components/organisms/**/*.tsx',
    // },
  ],
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    './src/builder/components/**/*.{styled,types,config,helper}.{ts,tsx}',
    './src/builder/components/**/index.{ts,tsx}',
    // ignoring this files as they are helpers to render component
    './src/builder/components/**/Checkbox/icons.tsx',
    './src/builder/components/**/DocumentItem/documentColumns.tsx',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/builder/test/StyleguideProvider'),
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  moduleAliases: {
    '~': path.resolve(__dirname, 'src'),
  },
  webpackConfig: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        image(),
        fonts(),
      ],
    },
  },
};
