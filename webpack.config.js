module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /pdf\.worker\.entry\.js$/,
          use: { loader: 'file-loader', options: { name: '[name].[ext]' } }
        },
        // other rules...
      ]
    }
  };
  