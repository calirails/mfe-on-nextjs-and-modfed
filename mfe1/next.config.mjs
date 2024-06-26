import { NextFederationPlugin } from '@module-federation/nextjs-mf';


const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    mfe2: `mfe2@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config,options ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe1',
        filename: 'static/chunks/remoteEntry.js',
        // dts: false,
        remotes: remotes(options.isServer),
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