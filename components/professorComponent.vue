<template>
    <div class="wrap">
        <div class="pro-left">
            <h2>教授紹介</h2>
            <h3>関良明</h3>
            <p class="fup">東京都市大学 デザイン・データ科学部 学部長</p>
            <h3>学位称号</h3>
            <p class="fup">博士（情報科学 東北大学） 2001年5月10日<br>
                学位論文題目: 利用者誘導機能を用いた情報共有システムに関する研究
            </p>
            <Button url="/sekiYoshiaki">もっと見る</Button>
        </div>
        <div class="pro-right fup">
            <nuxt-link to="/sekiYoshiaki">
                <img src="@/assets/seki.jpeg" alt="seki-yoshiaki">
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
    div.wrap {
        width: 100%;
        height: 100vh;
        background-color: black;
        color: whitesmoke;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 3rem;
    }
    div.pro-left {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div.pro-right {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h2 {
        font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
        font-weight: bold;     
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    h3 {
        font-family: 'Noto Sans JP','Helvetica', monospace;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }

    /* sp表示 */
    @media screen and (max-width: 768px) {
        div.wrap {
            flex-direction: column;
            padding: 2rem 1rem;
            height: 100%;
        }
        div.pro-left {
            width: 100%;
            padding: .5rem;
        }
        div.pro-right {
            width: 100%;
            flex-direction: initial;
            order: -1;
            padding: 1rem;
            text-align: center;
        }
        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        img {
            width: 75%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
        }
    }
</style>