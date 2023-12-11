<!-- index.vue -->

<template>
  <div>
      <div class="cover">
        <div id="video-area">
          <video id="video" src="@/assets/video.mp4" preload="auto" autoplay loop muted></video>
        </div>
        <div class="title">
          <h1 id="tcu">東京都市大学</h1>
          <h1 id="sekiken">関研究室</h1>
          <h1 id="inforsec">情報セキュリティ</h1>
          <h2>Tokyo City University Information Security Lab</h2>
        </div>
      </div>

      <div id="conteiner">
        <section>
          <div class="section_content">
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
    font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-weight: bold;
    line-height: 1;
  }
  .cover h1#tcu {
    display: block;
    font-size: 2rem;
    font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-weight: bold;
    line-height: 1;
  }
  .cover h1#sekiken {
    display: block;
    font-size: 4rem;
    font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-weight: bold;
    line-height: 1;
  }
  .cover h1#inforsec {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-weight: bold;
    line-height: 1;
  }
  .cover h2 {
    font-size: 1rem;
    font-family: serif;
    display: block;
  }
  #conteiner {
    position: relative;
    background-color: white;
    z-index: 1;
  }
  /* スクロールテリングアニメーション */
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
  top: 0;
  width: 75vw;
  display: grid;
  place-items: center;
  padding: 1rem;
  max-width: 100vw;
  margin: 0 auto;
}
h1#scroll-head {
  display: grid;
  font-size: clamp(2rem, 7vw + 2rem, 4rem);
  text-align: center;
  line-height: 1;
  margin: 0;
  width: 100%;
  position: relative;
  top: 0%;
  left: 50%;
  translate: -50% -50%;
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
  section {
    height: 100vh;
  }
  h1#scroll-head {
    font-size: 2rem;
  }
}
</style>