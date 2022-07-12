/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),

    // config svg
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },

  // config svg
  resolver: {
    assetExts: defaultAssetExts.filter(ext => ext !== 'svg'),
    sourceExts: ['jsx', 'js', 'cjs', 'mjs', 'ts', 'tsx', 'svg'],
  },
};
