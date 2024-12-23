const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          path: require.resolve("path-browserify"),
          stream: require.resolve("stream-browserify"),
          crypto: require.resolve("crypto-browserify"),
          assert: require.resolve("assert"),
          util: require.resolve("util"),
          vm: require.resolve("vm-browserify"),
          querystring: require.resolve("querystring-es3"),
          http: require.resolve("stream-http"),
          net: false,
          fs: false, // Optional: Set to false if the module is not required
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
  },
};
