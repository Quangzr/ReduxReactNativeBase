module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // config react-native-reanimated to use navigation
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          app: './app',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
