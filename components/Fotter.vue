<template>
    <div class="wrap">
        <div class="footer-back">
            <img src="@/assets/gakuseisitu.jpg" alt="background" class="footer-cover">
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
                    <h3>関研究室 -Information Security lab-</h3>
                    <ul>
                        <li><a href="mailto:seki@tcu.ac.jp">seki[at]tcu.ac.jp<small>（[at]を@に変えてください）</small></a></li>
                        <!-- <li><a href="tel:+090-5506-5656">+090-5506-5656</a></li> -->
                        <li><a href="https://www.comm.tcu.ac.jp/seki-lab">www.comm.tcu.ac.jp/seki-ken</a></li>
                        <!-- <li><a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank" rel="noopener noreferrer">旧サイトへ</a></li> -->
                        <li>東京都市大学 横浜キャンパス3号館7階 3701</li>
                    </ul>
                </div>
                <div class="footer-right sitemap">
                    <h3>Sitemap</h3>
                    <ul>
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/member">Member</nuxt-link></li>
                        <li><nuxt-link to="/other">Other</nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="footer-flex flex-2">
                <div class="univ footer-left">
                    <h4><a href="https://www.tcu.ac.jp">東京都市大学 横浜キャンパス</a></h4>
                    <p>
                        <a href="https://www.comm.tcu.ac.jp/gseis/department/index.html" target="_blank">環境情報学専攻</a><br>
                        <a href="https://informatics.tcu.ac.jp/faculty/system/" target="_blank">メディア情報学部 情報システム学科</a><br>
                        <a href="https://www.comm.tcu.ac.jp/ddprom/" target="_blank">デザインデータ科学部 デザインデータ科学科</a>
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
            <span id="copy">&copy; 2023 - {{ year }} 東京都市大学 関研究室 all right reserve | Designed by <a href="https://manapuraza.com" target="_blank">Manato Yamashita</a></span>
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
        padding: 2rem;
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
    .univ {
        margin-top: 1rem;
        width: 100%;
    }
    h2 {
        font-family: 'Dela Gothic One', "Noto Sans JP", sans-serif, "Helvetica", monospace;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    h4 {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }
    ul {
        list-style: none;
        padding: 1rem 0;
    }
    li {
        font-size: 1rem;
        margin: 0 0 .5rem 1rem;
        font-family: Arial, Helvetica, sans-serif, monospace;
    }
    p {
        font-size: 1rem;
        margin-bottom: .5rem;
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
        padding: .5rem;
        font-size: .8rem;
        font-family: Arial, Helvetica, sans-serif, monospace;
        text-align: center;
    }
    
    .fancy {
    background-color: transparent;
    border: 2px dashed #f3f3f3;
    border-radius: 0;
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
        h2 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: medium;
        }
        h4 {
            font-size: small;
        }
        ul, li, p {
            font-size: small;
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