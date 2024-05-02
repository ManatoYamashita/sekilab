<template>
    <div class="main">
      <header-component v-for="item in items" :key="item.title" :title="item.title" :subtitle="item.subtitle" :paragraph="item.paragraph" :image="item.image" />
        <div class="detail fup">
          <article class="schedule">
            <h2 class="sche-title">年間スケジュール</h2>
            <p>関研究室では様々な活動を行います。<br>
              その年によって違いますが一般的な一年のイベントとしては、</p>
            <ul>
                <li>4月: 新３年生配属</li>
                <li>6月: 横浜祭</li>
                <li>7月: オープンキャンパス</li>
                <li>9月: ゼミ合宿</li>
                <li>10月: That's Seminar（研究室紹介）</li>
                <li>11月: 世田谷祭</li>
                <li>2月: 事例研究発表会</li>
                <li>2月: 卒業研究発表会</li>
            </ul>
            <p>などがあります。他にも「他大学との交流会」や、「勉強会」などに参加したりもします。</p>
          </article>
        </div>
        <div id="blog">
            <blog-component />
        </div>
        <div id="past">
            <h2>過去の活動はこちら</h2>
            <button>
            <a href="#" class="btn2 fup"><span class="spn2">
                <p>旧Webサイト（2014~2022）</p>
            </span></a>
            </button>
        </div>
    </div>
</template>

<script>
  useHead({
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "関研究室 - 年間スケジュール",
          description: "関研究室では様々な活動を行います。年間を通じて、新３年生配属、横浜祭、オープンキャンパス、ゼミ合宿、That's Seminar（研究室紹介）、世田谷祭、事例研究発表会、卒業研究発表会などのイベントがあります。",
          image: "https://comm.tcu.ac.jp/seki_lab/ogp.png",
          startDate: "2023-04-01",
          
        })

      }
    ]
  });

  export default {
      data() {
          return {
              items: [
                  {
                      title: '活動報告',
                      subtitle: 'Activity page',
                      paragraph: '関研究室では様々な活動を行います。このページでは1年のスケジュールのモデルと活動報告をblog形式でお届けします。',
                      image: '/images/gakuseisitu.webp'
                  }
              ]
          };
      }
  }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.detail {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: whitesmoke;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--seki-text-color);
}
.schedule {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2.5rem;
    padding: 5rem 0;
}
article .sche-title {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-size: 2.5rem;
    padding: 2rem;
}
p {
    font-size: 1rem;
}
ul {
    font-size: 1rem;
    margin: 1rem;
    text-align: left;
    padding: 2rem;
    border: 1px solid black;
    border-radius: 10px;
}
li {
    list-style: none;
    margin: 0 0 0 1rem;
}
#blog {
    width: 100%;
    height: 100%;
}
#past {
    width: 100%;
    height: 100vh;
    background-color: var(--seki-main-color);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.btn2 {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s;
}

.btn2::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - -2px);
  background-color: var(--seki-main-color);
  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 50px);
  background-color: var(--seki-main-color);
  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2:hover::before {
  transform: translateY(-25px);
  height: 0;
}

.btn2:hover::after {
  transform: scaleX(0);
  transition-delay: 0.15s;
}

.btn2:hover {
  border: 2px solid #fefefe;
}

.btn2 span {
  position: relative;
  z-index: 3;
}

button {
  text-decoration: none;
  border: none;
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  .detail {
    padding: 1rem 2rem 5rem 2rem;
  }
}
</style>