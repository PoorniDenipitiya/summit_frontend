const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ecommerce";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    experiments: {
      outputModule: true,
    },
    output: {
      publicPath: "auto",
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          type: 'asset/source'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-typescript', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "root",
        filename: "remoteEntry.js",
        remotes: {
          "@ecommerce/layout": "layout@http://localhost:8084/remoteEntry.js"
        },
        shared: {
          ...deps,
          react: { 
            singleton: true, 
            requiredVersion: deps.react,
            eager: true
          },
          "react-dom": { 
            singleton: true, 
            requiredVersion: deps["react-dom"],
            eager: true
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
            eager: true
          },
          "single-spa-react": {
            singleton: true,
            eager: true,
            requiredVersion: deps["single-spa-react"]
          },
          "antd": {
            singleton: true,
            eager: true,
            requiredVersion: deps.antd
          }
        }
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
    devServer: {
      port: 9000,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};