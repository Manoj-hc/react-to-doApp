const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          __dirname + '/src/'
        ],
        loader: 'babel-loader',
        options: {
          presets: ["react", "es2015", "es2016"],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  }
}
