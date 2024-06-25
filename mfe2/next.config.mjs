import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, _options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe2',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./Button": './components/Button.js',
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    )
    return config
  }
};

export default nextConfig;
