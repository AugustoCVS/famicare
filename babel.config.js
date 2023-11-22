module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["nativewind/babel"],
      ['module-resolver', {
        root: '.',
        extensions: [
          '.ios.js',
          'ios.tsx',
          '.android.js',
          'android.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      }]
    ],
  };
};
