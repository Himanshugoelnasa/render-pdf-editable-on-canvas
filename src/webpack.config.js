// webpack.config.js
module.exports = {
    // other webpack configurations
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /pdf\.worker\.(min\.)?js$/,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
  };
  