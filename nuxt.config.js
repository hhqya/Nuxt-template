
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  devServer: {
    // open: process.platform === 'darwin',
    //项目启动后自动弹出浏览器
    open: true,
    host: '0.0.0.0',
    port: 8234,
    https: false,
    hotOnly: false
    // proxy: {
    //   '/api:': {
    //     target: '', //请求地址
    //     ws: true,
    //     changeOrigin: true, //允许跨域
    //     //路径重写
    //     pathRewrite: {
    //       '^api/': '' //请求地址
    //     }
    //   }
    // }
  }
}
