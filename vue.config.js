const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  // 連結串列式webpack屬性
  chainWebpack: (config) => {
    // 修改內部svg規則
    const svg = config.module.rule('svg')
    svg.exclude.add(resolve('src/icons')).end()

    // 新增規則，use為規則命名，loader表示使用的載入器，tap表示配置選項
    const svgSpriteLoader = config.module.rule('svg-sprite')
    svgSpriteLoader
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  },
}
