module.exports = {
  reactStrictMode: false,

  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}
