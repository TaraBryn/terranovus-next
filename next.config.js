/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
      const prefix = config.assetPrefix ?? config.basePath ?? '';
      config.module.rules.push({
        test: /\.m4v$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash].[ext]',
          },
        }],
      });

      return config;
    },
}

module.exports = nextConfig
