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
      // 全てのオーガニック検索から除外
      { name: 'robots', content: 'noindex, nofollow' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '東京都市大学, 関研究室, 情報セキュリティ, 関良明, 都市大, TCU, sekilab, seki, デザインデータ科学' },
      { name: 'description', content: '"つながる"にもっと安心を。東京都市大学 情報システム学科の関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。' },
      { property: 'og:title', content: 'Tokyo City University SEKI-Information Security Lab.' },
      { property: 'og:description', content: 'a Website SEKI Lab. at TCU, research about Information Security.' },
      { property: 'og:image', content: '/ogp.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://comm.tcu.ac.jp/seki_lab' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '東京都市大学, 関研究室, 情報セキュリティ, 情報共有システム, 情報セキュリティ行動支援システム' },
      { name: 'description', content: '"つながる"にもっと安心を。東京都市大学 情報システム学科の関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。' },
      { property: 'og:title', content: 'Tokyo City University SEKI-Information Security Lab.' },
      { property: 'og:description', content: 'a Website SEKI Lab. at TCU, research about Information Security.' },
      { property: 'og:image', content: '/ogp.png' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card, content: summary_large_image' },
    ]
  })
  import { onMounted, onUnmounted, ref } from 'vue';
  
  // 要素が画面内に入ったかをチェックする関数
  const checkVisible = (elm: HTMLElement) => {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  };

  // スクロールイベントリスナーを追加する関数
  const addScrollListener = () => {
    window.addEventListener('scroll', onScroll);
  };

  // スクロールイベントリスナーを削除する関数
  const removeScrollListener = () => {
    window.removeEventListener('scroll', onScroll);
  };

  // スクロールイベント時に実行される関数
  const onScroll = () => {
    const elements = document.querySelectorAll('.fup');
    elements.forEach((element: Element) => {
      if (checkVisible(element as HTMLElement)) {
        (element as HTMLElement).classList.add('element-visible');
      }
    });
  };

  onMounted(() => {
    addScrollListener();
  });

  onUnmounted(() => {
    removeScrollListener();
  });
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