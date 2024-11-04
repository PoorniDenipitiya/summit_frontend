const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ecommerce",
    projectName: "layout",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      publicPath: "auto",
    },
    devServer: {
      port: 8084,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "layout",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./AppHeader": "./src/AppHeader.jsx",
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
          // Add other shared dependencies as needed
        }
      })
    ]
  });
};
