module.exports = {
// 基本路径 baseURL已经过时
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 放置静态资源的目录
  assetsDir: 'static',
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
