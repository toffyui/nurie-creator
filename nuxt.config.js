require('dotenv').config()
const { API_BASE_URL } = process.env
export default {
  head: {
    title: '塗り絵ツクール',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '塗り絵をかんたんに作れるサービスです',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '塗り絵ツクール',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nurie-maker.com',
      },
      { hid: 'og:title', property: 'og:title', content: '塗り絵ツクール' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '塗り絵をかんたんに作れるサービスです',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://ogp-builder.com/MkU6cw/https://nurie-maker.com',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'http://ogp-builder.com/MkU6cw/https://nurie-maker.com',
      },
      { name: 'twitter:site', content: '@yui_active' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    API_BASE_URL,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
