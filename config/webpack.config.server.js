const path = require('path')

module.exports = {
  target: 'node',
  // 设置打包的一个入口
  entry: {
    app: path.join(__dirname, '../src/server/server-entry.js')
  },
  //打包输出的地址
  output: {
    //输出的文件名
    filename: 'server-entry.js',
    //输出的文件 存放地址
    path: path.join(__dirname, '../build'),
    publicPath: '/public',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        //支持 es6+ 编译工具，官方默认支持
        loader: "babel-loader"
      }, {
        test: /.js$/,
        loader: "babel-loader",
        //不需要编译
        exclude: [path.join(__dirname, "../node_modules")]
      }
    ]
  }
}