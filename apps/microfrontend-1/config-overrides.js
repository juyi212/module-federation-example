const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  webpack: (config) => {
    const plugins = [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        name: "microfrontend1",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: "^18.2.0",
          },
          "react-dom": {
            eager: true,
            singleton: true,
          },
        },
      }),
    ];

    if (isDevelopment) {
      plugins.push(new ReactRefreshWebpackPlugin());
    }

    return {
      ...config,
      mode: isDevelopment ? "development" : "production",
      output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "http://localhost:3001/",
      },
      plugins,
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"],
                plugins: [
                  isDevelopment && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
            },
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
      },
    };
  },
  devServer: (configFunction) => {
    return (proxy, allowedHost) => ({
      ...configFunction(proxy, allowedHost),
      port: 3001,
      static: {
        directory: path.resolve(__dirname, "build"),
      },
      // hot: true,
      historyApiFallback: true,
    });
  },
};
