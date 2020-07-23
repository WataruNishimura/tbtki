const siteName = "tabatakai's portfolio website"

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "tabatakai's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "This is tabatakai's portfolio website."
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tbtki.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteName
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "This is tabatakai's portfolio website."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tbtki.com/img/profile.jpg'
      },
      {
        name: 'twitter:site',
        content: '@tbt_ki'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png'
      }
    ],
    script: [{ src: 'https://use.typekit.net/bzq7ynh.js' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', 'nuxt-fontawesome'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  },
  fontawesome: {
    component: 'fa'
  }
}
