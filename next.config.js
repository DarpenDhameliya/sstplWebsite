/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// module.exports = {
//     images: {
//       domains: ['websiteapi.softstorm.in'], 
//     },
//   };

module.exports = {
  images: {
    domains: ['websiteapi.softstorm.in','localhost','192.168.0.238'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
          },
        },
      ],
    });

    return config;
  },
};
