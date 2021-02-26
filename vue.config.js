module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Tasks'
    }
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map'
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
