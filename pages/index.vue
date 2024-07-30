<!-- index.vue -->

<script setup>
import { useHead } from '#imports'

const organization = {
  name: '東京都市大学 関研究室 - Information Security Lab.',
  description: '東京都市大学 関研究室のホームページです。情報セキュリティを中心に、情報共有システムや情報セキュリティ行動支援システムの研究を行っています。',
  image: 'https://comm.tcu.ac.jp/seki_lab/ogp.png',
  brand: 'Tokyu City University Seki Lab.'
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'organization',
        name: organization.name,
        description: organization.description,
        image: organization.image,
        brand: {
          '@type': 'Brand',
          name: organization.brand
        }
      })
    }
  ]
});
</script>

<template>
  <div>
      <div class="cover">
        <div id="video-area">
          <Client-only>
            <video id="video" format="webm" src="/images/video.webm" preload="auto" autoplay muted playsinline loop></video>
          </Client-only>
         </div>
        <div class="title">
          <h1 id="tcu">東京都市大学</h1>
          <h1 id="sekiken">関研究室</h1>
          <h1 id="inforsec">Under Constraction...</h1>
          <h2>Tokyo City University<br>
             Information Security Lab</h2>
        </div>
      </div>

      <div id="container">
        <section>
          <div class="section_content fup">
            <h1 id="scroll-head">
              <span>More secure for "<strong>Connecting</strong>"</span>
              <span>"<strong>つながる</strong>"にもっと安心を</span>
            </h1>
          </div>
        </section>

        <div id="content">
          <BlogComponent />
          <ProfessorComponent />
          <AboutComponent />
        </div>
      </div>
  </div>
</template>

<style scoped>
  .cover {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    z-index: -1;
  }
  #video-area{
    position: fixed;
    z-index: -1;
    top: 0;
    right:0;
    left:0;
    bottom:0;
    overflow: hidden;
  }

#video {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 177.77777778vh;
    height: 56.25vw;
    min-height: 100%;
    min-width: 100%;
  }
  video::-webkit-media-controls {
    display: none;
  }

  video::-moz-fullscreen-media-controls {
    display: none;
  }
  .title {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3rem;
    mix-blend-mode: difference;
    text-shadow: 0 0 10px black;
  }
  .cover h1 {
    display: block;
    font-size: 3rem;
    margin-bottom: .5rem;
    font-family: 'Noto Sans JP','Helvetica', monospace;
    font-weight: 800;
    line-height: 1;
  }
  .cover h1#tcu {
    display: block;
    font-size: 3rem;
  }
  .cover h1#sekiken {
    display: block;
    font-size: 7rem;
  }
  .cover h1#inforsec {
    display: block;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .cover h2 {
    font-size: 1rem;
    font-family: serif;
    display: block;
  }
  #container {
    position: relative;
  }
  section {
    min-height: 100vh;
    height: 200vh;
    display: grid;
    place-items: center;
    position: relative;
    width: 100vw;
    display: block;
    view-timeline-name: --section;
  }
.section_content {
  min-height: 100vh;
  position: sticky;
  /* position: relative; */
  background-color: #f6f6f6;
  top: 0;
  display: grid;
  place-items: center;
  max-width: 100vw;
  margin: 0 auto;
  overflow: hidden;
}
h1#scroll-head {
  display: grid;
  font-size: clamp(2rem, 7vw + 2rem, 4rem);
  font-size: 2rem;
  text-align: center;
  line-height: 1;
  margin: 0;
  width: 100%;
  max-width: 100vw;
  transition: scale .5s;
  animation-delay: 1s;
  padding: 2rem 3rem 3.5rem 3rem;
  background-color: #f6f6f6;
}
@keyframes activate {
  0% { --active: 0; }
  100% { --active: 1; }
}
h1#scroll-head span:first-of-type {
  display: inline-block;
  color: dimgray;
  font-size: 0.35em;
  padding: 2rem;
  display: inline-block;
  animation: fade-away both linear;
  animation-timeline: --section;
  animation-range: entry-crossing 50% exit 50%;
}
h1#scroll-head span:last-of-type {
  display: inline-block;
  animation: scale-up both cubic-bezier(.1,.7,.9,1.3), fade-away both linear;
  animation-timeline: --section;
  animation-range: entry-crossing 60% exit 70%, exit 10% exit 50%; 
}
span strong {
  color: var(--seki-main-color);
}
@keyframes scale-up {
  to {
    scale: 1.5;
  }
}
@keyframes grow {
  0% {
    scale: 0.5;
    opacity: 0;
  }
}

@keyframes fade-away {
  100% {
    opacity: 0;
  }
}
#content {
  z-index: 0;
}

.element-visible #scroll-head {
  max-width: 100%;
  transform: scale(1);
  font-size: 2rem;
  animation: scale 1s;
  animation-delay: 1s;
  animation-fill-mode: both;
  animation-timing-function: 1.5s cubic-bezier(0,.81,.86,.98);
}
@keyframes scale {
  0% {
    font-size: 2rem;
  }
  100% {
    font-size: 3rem;
  }
}

/* sp表示 */
@media screen and (max-width: 768px) {
  .cover {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    z-index: 0;
  }
  .title {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3rem;
  }
  h1#tcu {
    font-size: 2rem !important;
  }
  h1#sekiken {
    font-size: 4rem !important;
  }
  h1#inforsec {
    font-size: 1.5rem !important;
  }
  section {
    height: 100vh;
    opacity: 1;
    position: relative;
    view-timeline: none;
  }
  h1#scroll-head {
    padding: 3rem .5rem 5rem .5rem;
    font-size: 1.5rem;
  }
  #scroll-head span:first-of-type {
    font-size: 50%;
  }
  #scroll-head span {
    font-size: 60%;
  }

  h1#scroll-head span:first-of-type {
    animation: none;
  }
  h1#scroll-head span:last-of-type {
    animation: none;
  }

  .element-visible #scroll-head {
    max-width: 100%;
    transform: scale(1);
    font-size: 2rem;
    animation: scale 1s forwards;
    animation-delay: 1s;
  }
}
</style>