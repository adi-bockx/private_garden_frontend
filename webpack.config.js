import Dotenv from 'dotenv-webpack';
export const plugins = [
    new Dotenv()
];
module.exports = {
    target: 'node',
    module: {
    
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
  };