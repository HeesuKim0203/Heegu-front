/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();

const nextConfig = {
  compiler: {
    styledComponents : { ssr: true, displayName : true, cssProp : true },
    // removeConsole : true,
  },
  i18n: {
    localeDetection : false,
    locales : ['ko-kr', 'ja-jp'],
    defaultLocale : 'ko-kr'
  },
  staticPageGenerationTimeout : 600,
  reactStrictMode: true,
}

module.exports = removeImports({
  ...nextConfig
})
