<template>
    <div id="menu">
        <div id="menu-inner">
            <div id="navArea" ref="nav">
                <nuxt-link to="/" id="logo-pc"><img src="@/assets/logo-white.png" alt="logo"></nuxt-link>
                <nav>
                    <div class="inner">
                        <nuxt-link to="/" class="log-sp"><img class="logo-sp" src="@/assets/logo.png" alt="logo"></nuxt-link>
                        <ul id="menu-content" @click="toggle">
                            <li class="first-content nav-li">
                                <nuxt-link to="/about">研究室概要</nuxt-link>
                                <ul class="second-content">
                                    <li class="nav-li"><nuxt-link to="/sekiYoshiaki">関先生について</nuxt-link></li>
                                    <li class="nav-li"><nuxt-link to="/activity">活動内容</nuxt-link></li>            
                                </ul>
                            </li>
                            <li class="first-content nav-li">
                                <nuxt-link to="/member">メンバー</nuxt-link>
                                <ul class="second-content">
                                </ul>
                            </li>
                            <li class="first-content nav-li">
                                <nuxt-link to="/other">その他</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div ref="humb" class="toggle_btn" @click="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="mask"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const nav = ref(null);
    const humb = ref(null);
    const open = 'open';
    const toggle = () => { 
        nav.value.classList.toggle(open),
        humb.value.classList.toggle(open)
    }
</script>

<style scoped>
    #menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
        color: var(--seki-text-color);
        height: 100px;
        z-index: 1;
    }
    #menu-inner {
        display: inline-block;
        width: 100%;
        padding: 1.5rem 3rem;
    }
    #navArea {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 0;
    }
    #navArea {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    img {
        width: 15rem;
    }
    .logo-sp {
        display: none;
    }
    nav {
        background-color: #fff;
        border-radius: 5rem;
        box-shadow: #333 0px 0px 10px;
    }
    .toggle_btn #mask {
        width: 0;
        display: flex;
    }

    #menu-content {
        margin: 0;
        padding: 0 2rem 1.1rem 2rem;
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    .first-content {
        position: relative;
        float: left;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }

    .first-content a {
        display: block;
        padding: 0 1rem;
        line-height: 2.5rem;
        color: #000;
        font-size: 1rem;
        font-weight: bolder;
        text-decoration: none;
    }

    .second-content {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        list-style: none;
        padding-left: 0;
        background-color: #fff;
        top: 0;
        width: 200%;
    }

    li:hover > .second-content {
        visibility: visible;
        opacity: 1;
        top: 2.5rem;
        border-radius: 0 5px 0 0;
        -webkit-transition: opacity 0.2s, visibility 0.2s, top 0.2s;
        transition: opacity 0.2s, visibility 0.2s, top 0.2s;
    }

    .second-content li a {
        display: block;
        line-height: 2.5rem;
        padding: 0 1rem;
        border-radius: 0 5px 0 0;
        color: #333;
        font-size: 1rem;
        font-weight: bolder;
        width: 100%;
    }

    .nav-li:hover {
        background: #dadada;
        border-radius: 0 1rem 0 0;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }

    @media screen and (max-width: 700px) {
        nav {
            position: fixed;
            top: 0;
            left: -300px;
            bottom: 0;
            width: 60%;
            background: #fff;
            border-radius: 0;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            z-index: 3;
            opacity: 0;
        }
        #menu-inner {
            padding: 1rem;
        }
        img {
            width: 10rem;
        }
        .logo-sp {
            display: block;
            padding-bottom: 1rem;
        }
        .open .second-content {
            top: 0;
        }
        .open nav {
            left: 0;
            opacity: 1;
        }
        nav .inner {
            padding: 1rem;
        }
        nav .inner ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        nav .inner ul li {
            position: relative;
            margin: 0;
        }
        nav .inner ul li a {
            display: block;
            color: #333;
            font-size: 14px;
            text-decoration: none;
            -webkit-transition-duration: 0.2s;
                    transition-duration: 0.2s;
        }
        .toggle_btn {
            display: block;
            position: fixed;
            top: 2rem;
            right: 2rem;
            width: 2rem;
            height: 2rem;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            cursor: pointer;
            z-index: 3;
        }
        .toggle_btn span {
            position: absolute;
            left: 0;
            width: 30px;
            height: 3px;
            background-color: #ccc;
            border-radius: 4px;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
        .toggle_btn span:nth-child(1) {
            top: 4px;
        }
        .toggle_btn span:nth-child(2) {
            top: 14px;
        }
        .toggle_btn span:nth-child(3) {
            bottom: 4px;
        }
        .open span {
            background-color: #fff;
        }
        .open span:nth-child(1) {
            -webkit-transform: translateY(10px) rotate(-315deg);
            transform: translateY(10px) rotate(-45deg);
        }
        .open span:nth-child(2) {
            opacity: 0;
        }
        .open span:nth-child(3) {
            -webkit-transform: translateY(-10px) rotate(315deg);
            transform: translateY(-10px) rotate(45deg);
        }
        #mask {
            display: none;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
        .open #mask {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.5;
            z-index: 2;
            cursor: pointer;
        }
        #menu-content {
            display: block;
            width: 100%;
            padding: 1rem;
            background: #fff;
            border-radius: 0;
        }
        #menu-content > li {
            width: 100%;
            margin-bottom: 15px;
        }
        #menu-content > li > a {
            height: 100%;
            padding: 0px;
            font-size: 100%;
            border-bottom: 1px solid #000;
        }
        #menu-content > li > ul.second-content {
            visibility: visible;
            opacity: 1;
            width: 100%;
            position: relative;
            -webkit-box-shadow: none;
                    box-shadow: none;
        }
        #menu-content > li > ul.second-content > li {
            width: 100%;
            text-align-last: left;
        }
        #menu-content > li > ul.second-content > li > a {
            padding-left: 15px;
        }
        #menu-content > li > ul.second-content > li > a:hover {
            background: none;
        }
        li:hover > .second-content {
            top: 0;
        }
    }
    </style>