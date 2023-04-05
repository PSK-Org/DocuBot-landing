const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: false,
    openAnalyzer: false,
  })

module.exports = withBundleAnalyzer(nextConfig)
