/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// module.exports = {
//     images: {
//       domains: ['websiteapi.softstorm.in'],
//     },
//   };

// module.exports = {
//   images: {
//     domains: ['websiteapi.softstorm.in','localhost','192.168.0.238','softst'],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mov|mp4|webm)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             publicPath: '/_next/static/videos/',
//             outputPath: 'static/videos/',
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// next.config.js
// module.exports = {
//   images: {
//     domains: ['websiteapi.softstorm.in', 'localhost', '192.168.0.238'],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mov|mp4|webm)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             publicPath: '/_next/static/videos/',
//             outputPath: 'static/videos/',
//           },
//         },
//       ],
//     });

//     return config;
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/images/:slug*',
//         destination: '/public/images/:slug*',
//       },
//     ];
//   },
// };
module.exports = {
  images: {
    domains: ['websiteapi.softstorm.in', 'localhost', '192.168.0.238','161.97.169.41'],
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
  async rewrites() {
    return [
      {
        source: '/images/:slug*',
        destination: '/public/images/:slug*',
      },
    ];
  },
  optimization: {
    minimize: true,
    // Other optimization options
  },
};


