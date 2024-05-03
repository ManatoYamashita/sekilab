<template>
    <div class="container">
        <div class="cellphone-container">    
            <div class="movie">       
                <div class="movie-img">
                    <nuxt-img format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
                </div>
                <div class="text-movie-cont">
                <div class="mr-grid">
                    <div class="col1">
                    <h1>関良明</h1>
                    <ul class="movie-gen">
                        <li>東京都市大学 /</li>
                        <li>メディア情報学部 情報システム学科, 大学院環境情報学研究科, 環境情報学専攻 教授  /</li>
                        <li>デザイン・データ科学部 学部長</li>
                    </ul>
                    </div>
                </div>
                <div class="mr-grid summary-row">
                    <div class="col2">
                    <h5>「社会活動を効率的に推進する情報共有と情報資産を守るセキュリティを探求しよう」</h5>
                    </div>
                </div>
                <div class="mr-grid">
                    <div class="col1">
                    <p class="movie-description">
                        現在、人類はコンピュータネットワークをインフラとした大きな転機、すなわち、産業型社会からサイバー社会へ急激にシフトしています。
                        この転機において、情報セキュリティは、現実の社会の安全・安心の実現を目指し、人や社会との接点をより広く、深くしつつある過程にあり、これからさらに重要性が高まる領域です。
                        研究室では、指導教員の企業での実務経験から、やり抜く力、プレゼンテーション・コミュニケーション能力、マネジメント能力を高め、社会に貢献できる人材を輩出したいと考えています。
                        
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container {
    position: relative;
    width: 100%;
    height: 100%;
}

.cellphone-container {
    width: 50%;
    height: auto;
    background-color: #1e1b26;
    margin: 60px auto 0 auto;
    box-shadow: 5px 5px 115px -14px black;
    border-radius: 1em;
}

.menu {
    position: absolute;
    right: 12px;
    top: 6px;
    z-index: 999;
}

.movie-img {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
        color-stop(0.00, rgba(0, 0, 0, 1)),
        color-stop(0.35, rgba(0, 0, 0, 1)),
        color-stop(0.50, rgba(0, 0, 0, 1)),
        color-stop(0.65, rgba(0, 0, 0, 1)),
        color-stop(0.85, rgba(0, 0, 0, 0.6)),
        color-stop(1.00, rgba(0, 0, 0, 0)));
}
.movie-img img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.text-movie-cont {
    padding: 1rem;
    text-align: justify;
    background-color: #1e1b26;
}

.summary-row {
    margin-top: 12px;
}

/* Typography */
h1, h2, h3, h4, h5 {
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin: 0px;
}

h1 {
    font-size: 36px;
    font-weight: 400;
}

h3 {
    font-size: 14px;
    font-weight: 400;
    color: var(--brand-color);
}

h5 {
    font-size: 12px;
    font-weight: 400;
}

.movie-gen li {
    font-family: 'Open+Sans', sans-serif;
    font-size: 12px;
    color: #bcbcbc; /* Darkened accent color by 40% */
    width: auto;
    display: block;
    float: left;
    margin-right: 6px;
    font-weight: 600;
}

.movie-details, .movie-description, .movie-actors {
    font-family: 'Open+Sans', sans-serif;
    font-size: 12px;
    text-align: justify;
    line-height: 1.3;
}

.movie-details {
    font-weight: 300;
    color: #d6d6d6; /* Darkened accent color by 20% */
}

.movie-description {
    font-weight: 400;
    color: #cccccc; /* Darkened accent color by 30% */
}

/* Grid System */
.thegrid {
    margin: 0 auto;
}

.mr-grid {
    width: 100%;
}

.mr-grid:before, .mr-grid:after {
    content: "";
    display: table;
}

.mr-grid:after {
    clear: both;
}

.mr-grid {
    zoom: 1;
}

.col1, .col2, .col3, .col3rest, .col4, .col4rest, .col5, .col5rest, .col6, .col6rest {
    margin: 0% 0.5% 0.5% 0.5%;
    padding: 1%;
    float: left;
    display: block;
}

.col1 {
    width: 98%;
}

@media screen and (max-width: 480px) {
    .cellphone-container {
        width: 100%;
    }
}
</style>