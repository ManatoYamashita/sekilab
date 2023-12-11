<template>
    <div class="wrap">
        <div class="pro-left">
            <h2>教授紹介</h2>
            <h3>関良明</h3>
            <p>東京都市大学 副学長 / デザインデータ科学部長 / ダイバーシティ推進室長</p>
            <h3>学位称号</h3>
            <p>博士（情報科学 東北大学） 2001年5月10日<br>
                学位論文題目: 利用者誘導機能を用いた情報共有システムに関する研究
            </p>
            <Button url="/seki-yoshiaki">もっと見る</Button>
        </div>
        <div class="pro-right">
            <div class="card card0">
                <nuxt-link to="/seki-yoshiaki">
                    <div class="border">
                        <h2 id="cardtitle">Yoshiaki Seki</h2>
                    </div>
                </nuxt-link>
            </div>
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
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    .border {
        height: 100vh;
        width: 100%;
        background: transparent;
        position: relative;
    }
    .card {
        height: 100vh;
        width: 100%;
        transition: background 0.8s;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .card0 {
        background: url("@/assets/seki.jpeg") center center no-repeat;
        background-color: #000;
        background-size: 100%;
    }
    .card0:hover {
        background: url("@/assets/seki-mono-transp.png") left center no-repeat;
        background-color: #000;
        background-size: 200%;
    }
    #cardtitle {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #fff;
        opacity: 0;
        transition: opacity 1s;
        padding: 1rem;
    }
    .card:hover #cardtitle {
        opacity: 1;
    }
    /* sp表示 */
    @media screen and (max-width: 768px) {
        div.wrap {
            flex-direction: column;
            padding: 0;
            margin: 2rem 0;
            padding: 2rem 1rem;
            height: 100%;
        }
        div.pro-left {
            width: 100%;
            height: 40%;
            padding: .5rem;
        }
        div.pro-right {
            width: 100%;
            height: 60%;
            flex-direction: initial;
            order: -1;
            padding: 1rem;
        }
        h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        .card {
            height: 40vh;
            width: 75%;
            transition: background 0.8s;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-align: center;
        }
        .card0 {
            background: url("@/assets/seki.jpeg") center center no-repeat;
            background-color: #000;
            background-size: 100%;
        }
        .card0:hover {
            background: url("@/assets/seki-mono-transp.png") left center no-repeat;
            background-color: #000;
            background-size: 200%;
        }
        #cardtitle {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #fff;
            opacity: 0;
            transition: opacity 1s;
            padding: 1rem;
        }
        .card:hover #cardtitle {
            opacity: 1;
        }
    }
</style>