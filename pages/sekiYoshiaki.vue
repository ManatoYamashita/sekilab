<template>
    <div id="main">
        <header-component :title="data" />
        <div class="professor">
            <div class="prof-1">
                <h2 id="name"><strong>関良明</strong>&nbsp;Yoshiaki Seki</h2>
                <div class="prof-flex">
                    <div class="card card0 prof-flex-content">
                        <div class="border">
                            <h2 id="cardtitle">Yoshiaki Seki</h2>
                            <em>
                                東京都市大学<br>
                                メディア情報学部 情報システム学科<br>
                                デザインデータ科学部 デザインデータ科学科<br>
                                環境情報学専攻<br>
                            </em>
                        </div>
                    </div>
                    <div class="prof-flex-content message fup">
                        <h3>「社会活動を効率的に推進する情報共有と情報資産を守るセキュリティを探求しよう」</h3>
                        <p>現在、人類はコンピュータネットワークをインフラとした大きな転機、すなわち、産業型社会からサイバー社会へ急激にシフトしています。
                            この転機において、情報セキュリティは、現実の社会の安全・安心の実現を目指し、人や社会との接点をより広く、深くしつつある過程にあり、これからさらに重要性が高まる領域です。
                            研究室では、指導教員の企業での実務経験から、やり抜く力、プレゼンテーション・コミュニケーション能力、マネジメント能力を高め、社会に貢献できる人材を輩出したいと考えています。
                        </p>
                    </div>
                </div>
            </div>
            <div id="history">
                <professorHistoryComponent />
            </div>
            <div id="research">
                <professorResearch />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const data = '教授紹介';
            return { data}
        }
    }
</script>

<style lang="css" scoped>
.professor {
    width: 100%;
}
.prof-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: #fff;
    padding: 3rem;
}
.prof-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.prof-flex-content {
    width: 50%;
}
.message {
    padding-left: 3rem;
}
h2 {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2.5rem;
    padding: 5rem 0;
    text-align: center;
}
h3 {
    font-size: larger;
    padding: 1rem;
}
strong {
    color: var(--seki-main-color);
    font-size: 120%;
}
p {
    padding: 1rem;
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    color: rgb(214, 214, 214);
}

.border {
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
.border:hover {
  border: 1px solid #fff;
}
.card {
  height: 379px;
  width: 300px;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card0 {
  background: url("@/assets/seki.jpeg") center center no-repeat;
  background-size: 300px;
}
.card0:hover {
  background: url("@/assets/seki-mono-transp.png") left center no-repeat;
  background-color: #000; ;
  background-size: 600px;
}
#cardtitle, em {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  opacity: 0;
  transition: opacity 1s;
  padding: 1rem;
}
em {
  position: absolute;
  color: #fff;
  height: 130px;
  top: 260px;
  font-size: .75rem;
}
.card:hover #cardtitle,
.card:hover em {
  opacity: 1;
}
#history {
    width: 100%;
    height: 100vh;
    background-color: var(--seki-main-color);
    color: #fff;
    overflow-x: scroll;
}
#research {
    width: 100%;
    background-color: #fff;
    color: #000;
    padding: 3rem;
}

/* sp表示 */
@media screen and (max-width: 768px) {
    h2#name {
        font-size: 1.2rem;
        padding: 1rem;
    }
    h2#name strong {
        font-size: 1.5rem;
    }
    prof-1 {
        padding: 1rem;
    }
    .prof-flex {
        flex-direction: column;
    }
    .prof-flex-content {
        width: 100%;
        padding: 1rem;
    }
    .message {
        padding-left: 0;
    }
    .border {
        height: 100%;
        width: 100%;
    }
    .card {
        width: 75%;
    }
    .card0 {
        background-size: 100%;
    }
    em {
        position: absolute;
        color: #fff;
        height: 130px;
        top: 260px;
        font-size: .75rem;
    }
    #history {
        height: auto;
    }
    #research {
        padding: 1rem;
    }
}
</style>