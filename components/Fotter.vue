<template>
    <div class="wrap">
        <div class="footer-back">
            <img src="@/assets/cover.webp" alt="background" class="footer-cover">
        </div>
        <footer>
            <h2>Contact us</h2>
            <div class="footer-flex">
                <!-- <div class="footer-left">
                    <h3>SNS</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>X</li>
                        <li>Facebook</li>
                        <li>linkedIn</li>
                    </ul>
                </div> -->
                <div class="footer-middle">
                    <h3>関研究室 <small>Information Security lab.</small></h3>
                    <p>
                        <a href="https://www.tcu.ac.jp/campuslife/introduction/yokohamacampus/">
                        <span>東京都市大学 横浜キャンパス3号館7階 3701号室</span>
                        </a>
                        <ul class="info">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height=".8rem" width=".8rem" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <small>&nbsp;seki[at]tcu.ac.jp（[at]の部分は@に変換してください。）</small>
                            </li>
                            <!-- <li><a href="tel:+090-5506-5656">+090-5506-5656</a></li> -->
                            <li><a href="https://github.com/tcu-seki-lab">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height=".8rem" width=".8rem" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                <small>&nbsp;Github（tcu-seki-lab）</small>
                            </a></li>
                        </ul>
                    </p>
                </div>

                <div class="footer-right sitemap">
                    <h3>Sitemap</h3>
                    <ul>
                        <li><nuxt-link to="/">ー Home</nuxt-link></li>
                        <li><nuxt-link to="/about">ー About</nuxt-link></li>
                        <li><nuxt-link to="/member">ー Member</nuxt-link></li>
                        <li><nuxt-link to="/other">ー Other</nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="footer-flex flex-2">
                <div class="univ footer-left">
                    <h4><a href="https://www.tcu.ac.jp">東京都市大学</a></h4>
                    <p>
                        <a href="https://www.comm.tcu.ac.jp/gseis/department/index.html" target="_blank">大学院環境情報学研究科 環境情報学専攻</a><br>
                        <a href="https://informatics.tcu.ac.jp/faculty/system/" target="_blank">メディア情報学部 情報システム学科</a><br>
                        <a href="https://www.comm.tcu.ac.jp/ddprom/" target="_blank">デザイン・データ科学部 デザイン・データ科学科</a>
                    </p>
                </div>
                <div class="old-site footer-right">
                    <a class="fancy" href="#">
                        <span class="top-key"></span>
                        <span class="text">旧サイトアーカイブ(2014-2022)</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </a>
                </div>
            </div>
            <span id="copy">&copy; 2023 - {{ year }} 東京都市大学 関研究室 All right reserved | Constracted by <a href="https://manapuraza.com" target="_blank">Manato Yamashita</a></span>
        </footer>
    </div>
</template>

<script>
    const now = new Date();
    const year = now.getFullYear();
    export default {
        data() {
            return {
                year: year
            }
        }
    }
</script>

<style scoped>
    .wrap {
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .footer-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .footer-cover {
        position: absolute;
        bottom: 1%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    footer {
        position: absolute;
        bottom: 0;
        height: 70vh;
        width: 100%;
        background-color: var(--seki-main-color);
        color: white;
        padding: 1.5rem;
    }
    .footer-flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .footer-left, .footer-middle, .footer-right {
        width: auto;
        margin: 0 1rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 1rem ;
    }
    .info li {
        margin: 0 .2rem;
    }
    .univ {
        margin-top: 1rem;
        width: 100%;
    }
    h2 {
        font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.3rem;
        font-weight: bold;
    }
    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }
    ul {
        list-style: none;
        padding-top: 1rem;
    }
    li {
        font-size: .9rem;
        margin: 0 0 .5rem 1rem;
        font-family: Arial, Helvetica, sans-serif, monospace;
    }
    p {
        font-size: .9rem;
        margin: .5rem 0;
        padding-left: 1rem;
    }
    .sitemap {
        text-align: right;
    }
    .sitemap ul {
        text-align: right;
    }
    .sitemap ul li {
        text-align: right;
    }
    a {
        color: whitesmoke;
        text-decoration: none; 
    }
    a:hover {
        color: white;
        font-weight: bolder;
    }
    #copy {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        max-width: 100%;
        padding: .3rem;
        font-size: .8rem;
        font-family: Arial, Helvetica, sans-serif, monospace;
        text-align: center;
    }
    
    .fancy {
        background-color: transparent;
        border: 2px dashed #f3f3f3;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-weight: 700;
        letter-spacing: 0.05em;
        margin: 0;
        outline: none;
        overflow: visible;
        padding: 1em 1.2em;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        transition: all 0.3s ease-in-out;
        user-select: none;
        font-size: .9rem;
        margin: 1rem;
    }

    .fancy::before {
        content: " ";
        width: .7rem;
        height: 2px;
        background: whitesmoke;
        top: 50%;
        left: .5em;
        position: absolute;
        transform: translateY(-50%);
        transform-origin: center;
        transition: background 0.3s linear, width 0.3s linear;
    }

    .fancy .text {
        font-size: .7em;
        line-height: 1.33333em;
        padding-left: 2em;
        display: block;
        text-align: left;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        text-decoration: none;
        color: whitesmoke;
    }

    .fancy .top-key {
        height: 2px;
        width: 1.5625rem;
        top: -2px;
        left: 0.625rem;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, left 0.3s ease-out;
    }

    .fancy .bottom-key-1 {
        height: 2px;
        width: 1.5625rem;
        right: 1.875rem;
        bottom: -2px;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy .bottom-key-2 {
        height: 2px;
        width: 0.625rem;
        right: 0.625rem;
        bottom: -2px;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy:hover {
        color: white;
        background: black;
    }

    .fancy:hover::before {
        width: 0.9375rem;
        background: white;
    }

    .fancy:hover .text {
        color: white;
        padding-left: 1.5em;
    }

    .fancy:hover .top-key {
        left: -2px;
        width: 0px;
    }

    .fancy:hover .bottom-key-1,
    .fancy:hover .bottom-key-2 {
        right: 0;
        width: 0;
    }

    @media screen and (max-width: 768px) {
        footer {
            flex-direction: column;
            height: 80%;
        }
        .flex-2 {
            display: flex;
            flex-direction: column;
        }
        .footer-right, .footer-middle, .footer-left {
            width: 100%;
            margin: 0;
        }
        h2 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: .9rem;
        }
        h4 {
            font-size: small;
        }
        ul, li, p {
            font-size: smaller;
        }
        li {
            margin-left: .3rem;
        }
        .univ > p, .univ > a {
            font-size: x-small;
        }
        #copy {
            font-size: xx-small;
        }
        .fancy {
            padding: .5em 1em;
        }
        .text {
            font-size: .5rem;
        }
    }
</style>