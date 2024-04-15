<template>
    <div id="main">
        <header-component :title="data" />
        <div class="professor">
            <div class="prof-1">
                <h2 id="name"><strong>関良明</strong>&nbsp;Yoshiaki Seki</h2>
                <p class="roll"><small>東京都市大学<br>
                    メディア情報学部 情報システム学科,
                    大学院環境情報学研究科 環境情報学専攻 教授<br>
                    デザイン・データ科学部 学部長</small>
                </p>
                <div class="prof-flex">
                    <div class="prof-flex-content">
                        <img src="@/assets/seki.jpeg" alt="seki-yoshiaki">
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
.roll {
    line-height: 1.3;
    text-align: center;
    padding-bottom: 4rem;
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
    padding-top: 5rem;
    padding-bottom: 2rem;
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
    text-align: justify;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
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
        text-align: center;
    }
    .message {
        padding-left: 0;
    }
    img {
        object-fit: cover;
        border-radius: 1rem;
    }
    #history {
        height: auto;
    }
    #research {
        padding: 1rem;
    }
}
</style>