module.exports = {
  module: {
    rules: [
      {
        test:/\.js$/i,
        use:'raw-loader',
      },
    ],
  },
};