// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);

const config = getDefaultConfig(__dirname);
// unstable_enablePackageExports: true,
config.resolver.unstable_enablePackageExports = true;
module.exports = config;