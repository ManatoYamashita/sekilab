// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
      ARCHIVES: process.env.ARCHIVES,
    }
  },
  devtools: {
    enabled: false,
  },
  ssr: true,

  app: {
    baseURL: process.env.NUXT_BASE_URL,
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: /ogp.png'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tokyo City University SEKI lab -Information Security',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: '東京都市大学, 関研究室, 情報セキュリティ, 関良明, 都市大, TCU, sekilab, seki, デザインデータ科学' },
        { name: 'description', content: '"つながる"にもっと安心を。東京都市大学 情報システム学科の関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:title', content: 'Tokyo City University SEKI Lab. -Information Security' },
        { property: 'og:description', content: 'a Website SEKI Lab. at TCU, for Information Security.' },
        { property: 'og:image', content: 'https://www.comm.tcu.ac.jp/seki-ken/ogp.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '東京都市大学 関研究室 Information Security' },
        { property: 'og:url', content: process.env.NUXT_BASE_URL },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },

  css: ['@/assets/main.css'],
  
  modules: [
    "nuxt-microcms-module",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
    "nuxt-schema-org",
    "nuxt-og-image",
    "nuxt-site-config",
  ],

  image: {
    domains: ['https://www.comm.tcu.ac.jp'],
  },

  site: {
    url: process.env.DOMAIN,
    name: "Tokyo City University SEKI Lab. -Information Security",
    description: "a Website SEKI Lab. at TCU, for Information Security.",
    baseUrl: process.env.NUXT_BASE_URL,
  },
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  googleFonts: {
    families: {
      "Noto+Sans+JP": [400, 500, 700, 800],
    }
  },
})

// nuxt-microcms-module からは3つのGET関数が提供されます。

// useMicroCMSGetList
// useMicroCMSGetListDetail
// useMicroCMSGetObject