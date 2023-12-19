<template>
    <div class="main">
        <header-component :title="data" />
        <div class="prof">
            <professor-component />
        </div>
        <div class="grad stud">
            <h2>大学院生</h2>
            <p>環境情報学専攻 2人</p>
            <h3>M2</h3>
                <div class="mems-cards">
                    <div class="mems" v-for="member in membersM2" :key="member.name">
                        <member-card-component :name="member.name" :image="member.image" :detail="member.detail" />
                    </div>
                </div>
            <h3>M1</h3>
                <div class="mems-cards">
                    <div class="mems" v-for="member in membersM1" :key="member.name">
                        <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                    </div>
                </div>
        </div>
        <div class="under-4 stud">
            <h2>学部4年生</h2>
            <p>メディア情報学部 情報システム学科 10人</p>
            <div class="mems-cards">
                <div class="mems" v-for="member in membersU4" :key="member.name">
                    <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                </div>
            </div>
        </div>
        <div class="under-3 stud">
            <h2>学部3年生</h2>
            <p>メディア情報学部 情報システム学科 13人</p>
            <div class="mems-cards">
                <div class="mems" v-for="member in membersU3" :key="member.name">
                    <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                </div>
            </div>
        </div>
        <div class="obog stud">
            <p>過去のメンバーはこちら（外部リンク）</p>
            <a class="fancy fup" href="#">
                <span class="top-key"></span>
                <span class="text">OB & OG</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/headerComponent.vue'
import ProfessorComponent from '~/components/professorComponent.vue'
import { reactive } from 'vue'
const data = 'メンバー紹介'

const membersM2 = reactive<{name: string, image: string, roll: string, detail: string}[]>([
  {name: "篠﨑 玲士", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「スマートフォンを用いて物理現象を理解させる3Dアプリケーションに関する研究」"},
])

const membersM1 = reactive<{name: string, image: string, roll: string, detail: string}[]>([
  {name: "相吉澤 奏", image: "_nuxt/assets/mems/m01.webp", roll: "環境", detail: "「共分散構造分析の設計手法に関する研究」"},
])

const membersU4 = reactive<{name: string, image: string, roll: string, detail: string}[]>([
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "堀 恭輔", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
])
const membersU3 = reactive<{name: string, image: string, roll: string, detail: string}[]>([
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
  {name: "岸 祐奈", image: "_nuxt/assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
  {name: "山下 真和都", image: "_nuxt/assets/mems/m01.webp", roll: "広報", detail: "「未定」"},

])
</script>

<style lang="css" scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: black;
}
.mems-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.mems {
    margin: 1%;
}
.stud {
    background-color: white;
    padding: 2rem 1rem;
    text-align: center;
}
.obog {
    background-color: #f5f5f5;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
h2 {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
}
p {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-size: 1rem;
    margin-bottom: 1rem;
}
.fancy {
 background-color: transparent;
 border: 2px solid #000;
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
 padding: 1.25em 2em;
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
 width: 1.5625rem;
 height: 2px;
 background: black;
 top: 50%;
 left: 1.5em;
 position: absolute;
 transform: translateY(-50%);
 transform-origin: center;
 transition: background 0.3s linear, width 0.3s linear;
}

.fancy .text {
 font-size: 1.125em;
 line-height: 1.33333em;
 padding-left: 2em;
 display: block;
 text-align: left;
 transition: all 0.3s ease-in-out;
 text-transform: uppercase;
 text-decoration: none;
 color: black;
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
</style>