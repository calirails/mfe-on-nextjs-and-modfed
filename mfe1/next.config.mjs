import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config,options ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          mfe2: `http://localhost:3001/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          // mfe2: `http://localhost:3001/static/${options.isServer ? 'ssr' : 'chunks'}/mf-manifest.json`,
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


