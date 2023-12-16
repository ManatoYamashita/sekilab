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
                        <li><a href="mailto:seki@tcu.ac.jp">seki@tcu.ac.jp</a></li>
                        <li><a href="tel:+090-5506-5656">+090-5506-5656</a></li>
                        <li><a href="https://www.comm.tcu.ac.jp/seki-lab">www.comm.tcu.ac.jp/seki-ken</a></li>
                        <li><a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank" rel="noopener noreferrer">旧サイトへ</a></li>
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
            <div class="univ">
                    <h4><a href="https://www.tcu.ac.jp">東京都市大学 横浜キャンパス</a></h4>
                    <p>
                        <a href="https://informatics.tcu.ac.jp/faculty/system/" target="_blank">メディア情報学部 情報システム学科</a><br>
                        <a href="https://www.comm.tcu.ac.jp/gseis/department/index.html" target="_blank">環境情報学専攻</a>
                        <a href="https://www.comm.tcu.ac.jp/ddprom/" target="_blank">デザインデータ科学部 デザインデータ科学科</a>
                    </p>
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
        justify-content: space-evenly;
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
        padding: 2rem 0 1rem 0;
    }
    li {
        font-size: 1rem;
        margin-bottom: .5rem;
        font-family: Arial, Helvetica, sans-serif, monospace;
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
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

    @media screen and (max-width: 768px) {
        footer {
            flex-direction: column;
            height: 80%;
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
    }
</style>