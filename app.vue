<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: '東京都市大学 関研究室-Information Security Lab.',
    htmlAttrs: {
      lang: 'ja'
    },
    link: [
      { rel: 'canonical', href: 'https://comm.tcu.ac.jp/seki_lab' }
    ],
    meta: [
      { name: 'description', content: '"つながる"にもっと安心を。東京都市大学 情報システム学科の関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。' },
      { property: 'og:title', content: 'Tokyo City University SEKI-Information Security Lab.' },
      { property: 'og:description', content: 'a Website SEKI Lab. at TCU, research about Information Security.' },
      { property: 'og:image', content: '/ogp.jpg' },
      { property: 'og:type', content: 'website' }
    ]
  })
</script>

<style lang="css">
  .page-enter-active {
    transition: cpacity 0.3s;
  }
  .page-leave-active {
    transition: opacity 0.4s;
  }
  .page-enter, .page-leave-to {
    opacity: slideIn;
  }
  .page-enter-active::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--seki-main-color);
    z-index: 2;
    animation: slideOut cubic-bezier(0.25, 0.1, 0.25, 1) .3s forwards;
  }
  .page-leave-active::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--seki-main-color);
    z-index: 2;
    animation: slideIn .3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  }
  @keyframes slideIn {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  @keyframes slideOut {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
  }
</style>