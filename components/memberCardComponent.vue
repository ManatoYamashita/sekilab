<template>
    <div id="main" class="fup">
        <div class="l-wrapper_02 card-radius_02">
            <article class="card_02">
                <div class="card__header_02">
                <p class="card__title_02">
                    {{ name }}
                </p>
                <figure class="card__thumbnail_02">
                    <img 
                        :src="image"
                        alt="member_sumbnaiil" class="card__image_02"
                    />
                </figure>
                </div>
                <div class="card__body_02">
                    <p class="card__text_02">
                        担当: <string>{{ roll }}</string>
                    </p>
                <p class="card__text2_02">
                    研究内容: {{ detail }}
                </p>
                </div>    
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
// propsの型を定義する
interface Props {
    name: string,
    image: string,
    roll: string,
    detail: string
}
// propsを受け取る
const props = defineProps<Props>()
</script>

<style lang="css" scoped>
    .l-wrapper_02 {
        margin: 1rem auto;
        width: 10rem;
        height: 23rem;
    }
    .l-wrapper_02:hover {
        box-shadow: 0 0 0px rgba(0, 0, 0, .16);
    }
    .card-radius_02{
        overflow: scroll;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,.2);
    }

    .card_02 {
        background-color: #fff;
        box-shadow: 0 0 0px rgba(0, 0, 0, .16);
        color: #212121;
        text-decoration: none;
    }

    .card__header_02 {
        display: flex;
        flex-wrap: wrap;
    }

    .card__title_02 {
        text-align: center;
        padding: .5rem;
        font-size: 1.2rem;
        order: 1;
        font-weight: bold;
        width: 100%;
        border-bottom: solid 1px black;
    }

    .card__thumbnail_02 {
        margin: 0;
        order: 0;
    }

    .card__image_02 {
        width: 100%;
    }

    .card__body_02 {
        padding: .5rem;
    }
    .card__text_02 {
        font-size: .8rem;
        text-align:center;
        text-decoration: none;
    }
    .card__text_02 string {
        font-weight: bold;
    }
    .card__text2_02 {
        font-size: .8rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
    }
</style>