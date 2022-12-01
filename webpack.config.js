const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  resolve: {
    alias: {
      // 'style': path.resolve(__dirname, './src/assets/css/'),
      // '@': path.resolve(__dirname, './src/assets/img')
    }
  },
  plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
   })
  ]
}