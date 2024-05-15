<template>
    <div class="container">
        <div class="cellphone-container">    
            <div class="professor">       
                <div class="professor-img">
                    <nuxt-img format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
                </div>
                <div class="text-professor-cont">
                    <div class="mr-grid">
                        <div class="col1">
                            <h1>関良明</h1>
                            <ul class="professor-gen">
                                <li>東京都市大学 /</li>
                                <li>メディア情報学部 情報システム学科, 大学院環境情報学研究科, 環境情報学専攻 教授  /</li>
                                <li>デザイン・データ科学部 学部長</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mr-grid summary-row">
                        <div class="col2">
                            <h2>「社会活動を効率的に推進する情報共有と情報資産を守るセキュリティを探求しよう」</h2>
                        </div>
                    </div>
                    <div class="mr-grid">
                        <div class="col1">
                            <p class="professor-description">
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
    height: auto;
    background-color: whitesmoke;
    margin: 60px auto 0 auto;
    box-shadow: 5px 5px 115px -14px gray;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.professor {
    display: flex;
    flex-direction: row;
}

.professor-img {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    -webkit-mask-image: -webkit-gradient(linear, right top, left top,
        color-stop(0.00, rgba(0, 0, 0, 0)),
        color-stop(1.00, rgba(0, 0, 0, 1))
    );
}
.professor-img img {
    height: 100%;
}

.text-professor-cont {
    padding: 1rem;
    text-align: justify;
    background-color: whitesmoke;
}

.summary-row {
    margin-top: .7rem;
}

/* Typography */
h1, h2{
    font-family: 'Montserrat', sans-serif;
    color: #333;
    font-weight: bold;
    margin: 0px;
}

h1 {
    font-size: 2.3rem;
}

h2 {
    font-size: 1.3rem;
}

.professor-gen li {
    font-family: 'Open+Sans', sans-serif;
    font-size: 1rem;
    color: #606060; /* Darkened accent color by 40% */
    width: auto;
    display: block;
    float: left;
    margin-right: 6px;
    font-weight: 600;
}

.professor-details, .professor-description, .professor-actors {
    font-family: 'Open+Sans', sans-serif;
    font-size: 1rem;
    text-align: justify;
    line-height: 1.3;
}

.professor-details {
    font-weight: 300;
    color: #484848; /* Darkened accent color by 20% */
}

.professor-description {
    font-weight: 400;
    color: #757575; /* Darkened accent color by 30% */
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

@media screen and (max-width: 650px) {
    .container {
        scale: .8;
    }
    .cellphone-container {
        width: 75%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    .professor {
        flex-direction: column;
    }
    .professor-img {
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        -webkit-mask-image: -webkit-gradient(linear, right bottom, left top,
        color-stop(0.00, rgba(0, 0, 0, 0)),
        color-stop(0.50, rgba(0, 0, 0, 1)));
    }
    .professor-img img {
        width: 100%;
        height: auto;
    }
}
</style>