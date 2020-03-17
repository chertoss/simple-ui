module.exports = {
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};
