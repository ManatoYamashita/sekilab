// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
      title: 'Tokyo City University SEKI - Information Security Lab.',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: /ogp.jpg'
      },
    },
        pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },

  css: [
    '@/assets/main.css'
  ],

  modules: ["nuxt-microcms-module", "@nuxtjs/google-fonts"],
  
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },

  googleFonts: {
    families: {
      display: 'swap',
      "Noto+Sans+JP": true,
      "Dela+Gothic+One": true,
    },
  },
})
