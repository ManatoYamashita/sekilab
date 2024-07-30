<template>
    <div class="main">
        <header-component 
            v-for="item in items" 
            :key="item.title" 
            :title="item.title" 
            :subtitle="item.subtitle" 
            :paragraph="item.paragraph" 
            :image="item.image" 
        />
        <div class="abouts">
            
            <professor-component />
            
            <div class="about-2">
                <h3>研究内容</h3>
                <article id="research">
                    <div class="res-card fup">
                        <img format="webp" src="/images/re-01.webp" alt="alt" class="about2-image element-hidden">
                        <h4>知的協調作業支援技術</h4>
                        <p>共通の仕事や目的のために働く利用者のグループを支援し、共有作業環境インタフェースを提供するコンピュータベースのシステムを創造します。</p>
                    </div>
                    <div class="res-card fup">
                        <img format="webp" src="/images/re-02.webp" alt="alt" class="about2-image element-hidden">
                        <h4>知識共有ネットワーク技術</h4>
                        <p>社会的ネットワークをインターネット上で構成するSNSを活用して、利用者の知識を共有できるサービスを提案します。</p>
                    </div>
                    <div class="res-card fup">
                        <img format="webp" src="/images/re-03.webp" alt="alt" class="about2-image element-hidden">
                        <h4>情報セキュリティ行動支援技術</h4>
                        <p>コンピュータネットワークのリスクを利用者が正しく理解し、脅威を利用者が常に意識して行動する攻めのセキュリティを目指します。</p>
                    </div>
                </article>
            </div>
            <div class="about-3">
                <div class="about3-img-wrap sin">
                    <img class="about3-image" format="webp" src="/images/gakuseisitu.webp">
                </div>
                <div class="about3-content">
                    <h3>研究テーマ例（2023）</h3>
                    <ul class="research-examples fup">
                        <li>ショルダーハックに関する調査</li>
                        <li>APEX LEGENDSサーバの仕組みに関する調査</li>
                        <li>ブロックチェーンを用いた電子投票システムに関する調査</li>
                        <li>利便性とセキュリティを両立させた音声型CAPTCHAの調査</li>
                        <li>サッカーにおけるトラッキングデータに関する研究</li><br>
                        など
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                items: [
                    {
                        title: '『安全につながる』 情報共有を目指して',
                        subtitle: '研究室概要 - about page',
                        paragraph: 'コンピュータ・ネットワークの多様な発展、拡大とそれに伴う各種脅威の顕在化など、情報通信環境は変化し続けています。私達関研究室は、「情報共有サービス」と「情報セキュリティ」を密接に結びつけ、セキュリティを考慮した情報共有システムの構築を目指し日々研究に取り組んでいます。',
                        image: '/images/security_image.webp',
                    }
                ]
            };
        }
    }
</script>

<style lang="css" scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: white;
}
.abouts {
    width: 100%;
    background-color: whitesmoke;
    color: #fff;
}
.about-1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}
h2 {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2.5rem;
    padding: 5rem 0;
}
strong {
    color: var(--seki-main-color);
    font-size: 120%;
}
.about-image {
    width: 50%;
    height: 100%;
    object-fit: cover;
    margin: 1em 0;
}
p {
    width: 100%;
    padding: 2rem;
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    color: rgb(214, 214, 214);
    text-align: justify;
}

.about-2 {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    color: var(--seki-text-color);
}
h3 {
    font-size: 2rem;
    padding: 3rem 2rem 2rem 1rem;
    text-align: center;
}
#research {
    width: 100%;
    height: auto;
    padding: 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
.res-card {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: 0 1rem 3rem .5rem;
    border-radius: .3rem .3rem 1rem;
    padding-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.about2-image {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-radius: .3rem .3rem 0 0;
}
.res-card h4 {
    padding: 1rem;
}
.res-card p {
    width: 100%;
    padding: 1rem;
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    color: var(--seki-text-color);
    font-size: small;
}

.about-3 {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: whitesmoke;
    color: var(--seki-text-color);
    display: flex;
}
.about3-content {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.about3-img-wrap {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about3-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.research-examples {
    height: 50%;
    padding: 1rem;
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 1rem;
}

@media screen and (max-width: 560px) {
    .about-1 {
        height: 100%;
    }
    h2 {
        font-size: 1.5rem;
        padding: 2rem 1rem;
    }
    p {
        padding: 2rem;
    }
    .about-2 {
        height: 100%;
    }
    h3 {
        font-size: 1.5rem;
        padding: 1rem;
    }
    #research {
        flex-direction: column;
    }
    .res-card {
        width: 100%;
        height: 100%;
        margin: 1rem 0;
    }
    .res-card img {
        width: 100%;
        height: 50%;
        object-fit: cover;
        border-radius: .3rem .3rem 0 0;
    }
    .res-card h4 {
        padding: 1rem;
    }
    .about-3 {
        flex-direction: column;
    }
    .about3-img-wrap {
        width: 100%;
        height: 50%;
    }
    .about3-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .about3-content {
        width: 100%;
        height: 50%;
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .research-examples {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem;
        font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
        font-size: 1rem;
    }
}
</style>