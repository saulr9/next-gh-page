const nextConfig = {
  assetPrefix: "/next-gh-page",
  basePath: "/next-gh-page",
  output: "export",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: "next-swc-loader",
            options: {
              isServer,
            },
          },
        ],
      });
    }
    return config;
  },
};

export default nextConfig;
