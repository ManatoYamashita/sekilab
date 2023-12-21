<template>
    <div class="wrap">
        <div class="about-left fup">
            <h2>研究室概要</h2>
            <img src="@/assets/whatisis.jpg" alt="lab" class="fup">
        </div>
        <div class="about-right fup">
            <ul class="fup">
                <li>01&nbsp;<h3>知的協調作業支援技術</h3></li>
                <p>共通の仕事や目的のために働く利用者のグループを支援し、共有作業環境インタフェースを提供するコンピュータベースのシステムを創造します。</p>

                <li>02&nbsp;<h3>知識共有ネットワーク技術</h3></li>
                <p>社会的ネットワークをインターネット上で構成するSNSを活用して、利用者の知識を共有できるサービスを提案します</p>

                <li>03&nbsp;<h3>情報セキュリティ行動支援技術</h3></li>
                <p>コンピュータネットワークのリスクを利用者が正しく理解し、脅威を利用者が常に意識して行動する攻めのセキュリティを目指します。</p>
                <br>
                
                <div class="btnarea">
                    <Button url="/about" class="fup">もっと見る</Button>
                </div>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    div.wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        padding: 0 1.5rem;
        background-color: #fff;
    }
    div.about-left, div.about-right {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div.about-right {
        margin: 0 auto;
        padding-left: 1rem;
    }
    h2 {
        font-family: 'Noto Sans JP','Helvetica', monospace;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    h3 {
        font-family: 'Noto Sans JP','Helvetica', monospace;
        font-weight: bold;
        display: inline-block;
        font-size: 1.3rem;
        color: var(--seki-text-color);
    }
    ul {
        list-style: none;
        padding: 5rem 0 3rem 0;
    }
    li {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: .5rem;
        color: grey;
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
        padding-left: 3rem;
        color: var(--seki-text-color);
    }
    img {
        width: 75%;
        object-fit: cover;
    }
    .btnarea {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    /* sp表示 */
    @media screen and (max-width: 768px) {
        div.wrap {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            height: 100%;
        }
        div.about-left, div.about-right {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        div.about-right {
            margin: 0 auto;
            padding-left: 0;
        }
        h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        h3 {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--seki-text-color);
        }
        ul {
            list-style: none;
            padding: 5rem 1rem 3rem 1rem;
        }
        li {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: .5rem;
            color: grey;
        }
        p {
            font-size: 1rem;
            margin-bottom: 2rem;
            padding-left: 0;
            color: var(--seki-text-color);
        }
        img {
            width: 100%;
            object-fit: cover;
        }
    }
</style>