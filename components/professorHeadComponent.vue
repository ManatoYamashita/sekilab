<template>
    <!-- <div class="wrap">
        <figure class="figure">
            <figcaption>
                <h2>「社会活動を効率的に推進する情報共有と情報資産を守るセキュリティを探求しよう」</h2>
                <p>現在、人類はコンピュータネットワークをインフラとした大きな転機、すなわち、産業型社会からサイバー社会へ急激にシフトしています。
                    この転機において、情報セキュリティは、現実の社会の安全・安心の実現を目指し、人や社会との接点をより広く、深くしつつある過程にあり、これからさらに重要性が高まる領域です。
                    研究室では、指導教員の企業での実務経験から、やり抜く力、プレゼンテーション・コミュニケーション能力、マネジメント能力を高め、社会に貢献できる人材を輩出したいと考えています。
                </p>
            </figcaption>

            <nuxt-img format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
        </figure>
    </div> -->

<div class="container">
  <div class="cellphone-container">    
      <div class="movie">       
        <!-- <div class="menu"><i class="material-icons"></i></div> -->
        <div class="movie-img">
            <nuxt-img format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
        </div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>Interstellar</h1>
              <ul class="movie-gen">
                <li>PG-13  /</li>
                <li>2h 49min  /</li>
                <li>Adventure, Drama, Sci-Fi,</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
            <!-- <div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul>
            </div> -->
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
              Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
            </div>
          </div>
          <!-- <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
            </div>
          </div> -->
        </div>
      </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="css" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  outline: none;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;
}

body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  min-width: 375px;
  height: 667px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}

figure:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

figure:hover h1 {
  opacity: 0;
  transform: scale(0.7);
}

figure:hover img {
  transform: scale(1.25);
}

figure:hover figcaption {
  bottom: 0;
}

figure h1 {
  position: absolute;
  top: 50px;
  left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 60px;
  font-weight: 100;
  line-height: 1;
  opacity: 1;
  transform: scale(1);
  transition: 0.25s ease;
  z-index: 999;
}

figure img {
  height: 100%;
  transition: 0.25s;
}

figure figcaption {
  position: absolute;
  bottom: -34%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 1;
  transition: 0.25s;
}

figure figcaption h3 {
  margin: 0 0 20px;
  padding: 0;
}

figure figcaption p {
  font-size: 14px;
  line-height: 1.75;
}

figure figcaption button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0;
  padding: 10px 30px;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

</style>