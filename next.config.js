/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();

const nextConfig = {
  compiler: {
    styledComponents : { ssr: true, displayName : true, cssProp : true },
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ko-kr',
        permanent: true,
      },
    ]
  },
}

module.exports = removeImports({
  ...nextConfig
})
