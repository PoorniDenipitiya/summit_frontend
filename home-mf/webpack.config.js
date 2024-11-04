const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const path = require("path");
//const packageJson = require('./package.json');  // Ensure package.json is in the same directory
//const deps = Object.keys(packageJson.dependencies);
const deps = require("./package.json").dependencies;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ecommerce",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      publicPath: "auto",
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "home",
        filename: "remoteEntry.js",
        remotes: {
          layout: "layout@http://localhost:8084/remoteEntry.js",
        },
        exposes: {},
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
        },
      }),
    ],
  });
};
