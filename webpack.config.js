module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    library: './index.js',
  },
  externals : {
    react: 'react',
    'styled-components': 'styled-components',
  },
  output: {
    library: 'ReactTournament',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
