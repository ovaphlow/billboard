const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js',

    'login': './src/login.js',
    'user': './src/user.js',
    'user.resume': './src/user.resume.js',

    'resume': './src/resume.js'
  },

  // devtool: 'inline-source-map',

  devServer: {
    compress: true,
    contentBase: './dist',
    host: '0.0.0.0',
    port: 80,
    proxy: {
      '/billboard/api': 'http://localhost:8000'
    }
  },

  output: {
    path: resolve(__dirname, 'dist/assets/js'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        /*
        使用html-loader, 将html内容存为js字符串, 比如当遇到
        import htmlString from './template.html';
        template.html的文件内容会被转成一个js字符串, 合并到js文件里.
        */
        use: 'html-loader'
      },
    ]
  },
}
