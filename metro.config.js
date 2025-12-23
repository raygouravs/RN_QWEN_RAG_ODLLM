const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// We keep these only so that Metro knows what to do IF it ever
// sees these files in your project. Since you use URLs now,
// Metro will mostly just ignore them.
config.resolver.assetExts.push('pte', 'bin');

module.exports = config;