module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/iconfont.css' }
    ],
    script: [
      { src: '../js/rem.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/reset.min.css', '~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',
      {
        target: 'http://192.168.1.108:8080', // api主机
      }
    ]
  ],
  loading: {
    color: '#55a4fd',
    height: '1px'
  },
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/mint-ui.js', ssr: false },
    { src: '~/plugins/iview.js', ssr: true }
  ]
}
