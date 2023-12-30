// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: /ogp.png'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tokyo City University SEKI lab -Information Security',
      meta: [
          // 全てのオーガニック検索から除外
          { name: 'robots', content: 'noindex, nofollow' },
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'format-detection', content: 'telephone=no' },
          { name: 'keywords', content: '東京都市大学, 関研究室, 情報セキュリティ, 関良明, 都市大, TCU, sekilab, seki, デザインデータ科学' },
          { name: 'description', content: '"つながる"にもっと安心を。東京都市大学 情報システム学科の関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'og:title', content: 'Tokyo City University SEKI Lab. -Information Security' },
          { property: 'og:description', content: 'a Website SEKI Lab. at TCU, for Information Security.' },
          { property: 'og:image', content: '/ogp.png' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: '東京都市大学 関研究室 Information Security' },
          { property: 'og:url', content: 'https://comm.tcu.ac.jp/seki_lab' },
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
      "Noto+Sans+JP": [400, 500, 700, 800],
    }
  },
})