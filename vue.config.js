const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const resolve = dir => {
  return path.join(__dirname, dir)
}
const PROXY_URL = 'https://www.easy-mock.com/mock/5cdd133a15d65607859de8db/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/static' : '/',
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        // plugins: [
        //   require('postcss-pxtorem')({
        //     // 把px单位换算成rem单位
        //     rootValue: 75,
        //     unitPrecision: 3, // 最小精度，小数点位数
        //     propList: ['*'], // !不匹配属性（这里是字体相关属性不转换）
        //     selectorBlackList: [],
        //     minPixelValue: 2 // 替换的最小像素值
        //   })
        // ]
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  configureWebpack: {
    plugins: [
      // 预渲染
      // new PrerenderSPAPlugin({
      //   // 生成文件的路径，也可以与webpakc打包的一致。
      //   // 下面这句话非常重要！！！
      //   // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
      //   staticDir: path.join(__dirname, './dist'),

      //   // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
      //   routes: ['/'],

      //   // 这个很重要，如果没有配置这段，也不会进行预编译
      //   renderer: new Renderer({
      //     inject: {
      //       foo: 'bar'
      //     },
      //     headless: false,
      //     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
      //     renderAfterDocumentEvent: 'render-event'
      //   })
      // })
    ]
  },
  productionSourceMap: false,
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: PROXY_URL,
        // ws: true,
        changeOrigin: true
      }
    }
  }
}
