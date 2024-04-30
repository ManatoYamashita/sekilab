<!-- <template>
    <div class="wrap">
        <div class="card">
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
                    <nuxt-img format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.wrap {
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: whitesmoke;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem;
    }
    div.card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: whitesmoke;
        color: black;
        padding: 2rem;
        border-radius: 1rem;

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
</style> -->

<template>
    <div class="proffessor__data">
      <div class="proffessor__poster">
        <span class="proffessor__poster--fill">
          <transition name="fade">
              <nuxt-img format="webp" src="/images/cover.webp" alt="yc" />
          </transition>
        </span>
        <span class="proffessor__poster--featured">
              <nuxt-img class="fup" format="webp" src="/images/seki.webp" alt="seki-yoshiaki" />
        </span>
      </div>
      <div class="proffessor_content">
        <h2 class="proffessor_name">関良明</h2>
        <ul class="proffessor__tags list--inline">
          <li>東京都市大学</li>
          <li>デザイン・データ科学部</li>
          <li>学部長</li>
        </ul>
        <p>Yoshiaki Seki</p>
        <div class="proffesor_details">
          <p><strong>学位称号: </strong>博士（情報科学 東北大学） 2001年5月10日</p>
          <p><strong>学位論文題目: </strong>利用者誘導機能を用いた情報共有システムに関する研究</p>
          <!-- <p><strong>Starring:</strong>
            <ul class="proffessor__actors list--inline">
              <li>aaa</li>
            </ul>
          </p> -->
        </div>
        <Button url="/sekiYoshiaki">もっと見る</Button>
      </div>
    </div>
</template>

<style lang="css" scoped>
    #wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        min-height: 100vh;
    }

    h1, h2, p, ul {
        line-height: 1.2;
    }

    h1:not(:last-child), h2:not(:last-child), p:not(:last-child), ul:not(:last-child) {
        margin-bottom: 12px;
    }

    p, li {
        font-size: 0.9em;
        line-height: 1.5;
    }

    p + ul {
        margin-top: 10px;
    }

    h1, h2, strong {
        font-weight: 900;
    }

    .list--inline li {
        display: inline-block;
    }

    .list--inline li:not(:last-child) {
        margin-right: 12px;
    }

    .proffesor_details {
        margin-bottom: 2rem;
    }

    .proffessor__data {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        height: 100%;
        background-color: whitesmoke;
        overflow: hidden;
    }

    @media (min-width: 600px) {
        .proffessor__data {
            flex-direction: row;
        }
    }

    .proffessor__search {
        position:absolute;
        top: 24px;
        right: 24px;
        margin:auto;
        width:calc(100% - 48px);
    }

    @media (min-width: 400px) {
    .proffessor__search {
        max-width: 200px;
    }
    }

    .proffessor__tags {
        font-size: 0.75em;
        color: darkgray;
    }

    .proffessor__poster {
        position: relative;
        display: flex;
        width: 100%;
        transform: translateZ(0);
    }

    @media (min-width: 600px) {
        .proffessor__poster {
            margin-right: 12px;
            width: 200px;
        }
    }

    .proffessor__poster--fill {
        position: absolute;
        overflow: hidden;
        top: -80%;
        bottom: -20%;
        left: -20%;
        width: 150%;
        height: 150%;
        background-color: gainsboro;
        transform: rotate(5deg);
    }

    @media (min-width: 600px) {
    .proffessor__poster--fill {
        top: -20%;
        width: 100%;
    }
    }

    .proffessor__poster--fill img {
        filter: blur(6px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(1.4);
    }

    .proffessor__poster--featured {
        position: relative;
        display: block;
        align-self: center;
        margin-top: 84px;
        margin-left: 24px;
        width: 140px;
        background-color: lightgray;
        border-radius: 2px;
        z-index: 1;
    }

    @media (min-width: 600px) {
        .proffessor__poster--featured {
            left: 56px;
            margin: auto;
        }
    }

    .proffessor__poster--featured img {
        display: block;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.6) 0 6px 12px -6px;
    }

    .proffessor__poster--featured img[src="N/A"] {
        min-height: 206px;
        opacity: 0;
    }

    .proffessor_content {
        flex: 1;
        padding: 2rem;
        margin: auto;
        color: black;
    }

    @media (min-width: 600px) {
        .proffessor_content {
            padding: 3rem;
        }
    }

    .proffessor_name {
        font-size: 2em;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s, transform .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(1rem);
    }

</style>