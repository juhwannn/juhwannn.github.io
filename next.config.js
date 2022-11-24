module.exports = {
  reactStrictMode: false,

  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}
