<template>
    <div id="main" class="fup" @click="showModal = true">
        <div class="l-wrapper card-radius">
            <article class="card">
                <div class="card__header">
                <p class="card__title">
                    {{ name }}
                </p>
                <figure class="card__thumbnail">
                    <img 
                    :src="image"
                        @error="setImageToDefault"
                        alt="member_thumbnail" class="card__image"
                    />
                    
                </figure>
                </div>
                <div class="card__body">
                    <p class="card__text">
                        担当: <string>{{ roll }}</string>
                    </p>
                <p class="card__text2">
                    研究内容: <string>{{ detail }}</string>
                </p>
                </div>    
            </article>
        </div>
    </div>

    <ModalComponent :isVisible="showModal" @update:isVisible="showModal = $event">
        <!-- モーダル内に表示したい内容 -->
        <div>
            <h2>{{ name }}</h2>
            <img :src="image" alt="member_thumbnail" class="card__image_modal">
            <p>担当: <strong>{{ roll }}</strong></p>
            <p>研究内容: <strong>{{ detail }}</strong></p>
        </div>
    </ModalComponent>
</template>

<script setup lang="ts">
import ModalComponent from '@/components/memberModalComponent.vue'

const showModal = ref(false)

// propsの型を定義する
interface Props {
    name: string,
    image: string,
    roll: string,
    detail: string
}
// propsを受け取る
const props = defineProps<Props>()

// デフォルト画像のパスをインポート
import defaultImage from '@/assets/mems/default.webp'

// エラー時に画像をデフォルトに設定する関数
const setImageToDefault = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = defaultImage;
}
</script>

<style lang="css" scoped>
    .l-wrapper {
        margin: 1rem auto;
        width: 10rem;
        height: 23rem;
        transition: box-shadow .3s;
        cursor: pointer;
    }
    .l-wrapper:hover {
        box-shadow: 0 0 0px rgba(0, 0, 0, .16);
    }
    .card-radius{
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,.2);
    }

    .card {
        background-color: #fff;
        box-shadow: 0 0 0px rgba(0, 0, 0, .16);
        color: #212121;
        text-decoration: none;
    }

    .card__header {
        display: flex;
        flex-wrap: wrap;
    }

    .card__title {
        text-align: center;
        padding: .5rem;
        font-size: 1.2rem;
        order: 1;
        font-weight: bold;
        width: 100%;
        border-bottom: solid 1px black;
    }

    .card__thumbnail {
        margin: 0;
        order: 0;
        width: 100%;
        height: 10rem;
    }

    .card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .card__image_modal {
        width: 50%;
        height: auto;
        object-fit: cover;
    }

    .card__body {
        padding: .5rem;
    }
    .card__text {
        font-size: .8rem;
        text-align:center;
        text-decoration: none;
    }
    .card__text string {
        font-weight: bold;
    }
    .card__text2 {
        font-size: .8rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
    }
</style>