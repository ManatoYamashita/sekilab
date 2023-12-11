<template>
    <div>
        <nuxt-link :to="url" class="btn">
            <slot>Default Button</slot>
        </nuxt-link>  
    </div>
</template>

<script>
    export default {
        props: {
            url: {
            type: String,
            required: true
            }
        }
    }
</script>

<style scoped>
    /* nuxt-linkボタン(もっと見る)のスタイル */
    .btn {
        display: inline-block;
        color: #fff;
        font-size: smaller;
        font-weight: bold;
        max-width: 300px;
        border: 2px solid var(--seki-text-color);
        border-radius: .5rem .5rem 0 .5rem;
        padding: 1em 2em;
        text-align: center;
        position: relative;
        background-position: 100% 0;
        background-size: 200% auto;
        background-image: linear-gradient(to right, #fff 0%, #fff 50%, var(--seki-main-color) 50%, var(--seki-main-color) 100%); /* 背景色(マウスオーバー後→前) */
        transition: background-position .8s cubic-bezier(0.19, 1, 0.22, 1);
        -webkit-transition: background-position .8s cubic-bezier(0.19, 1, 0.22, 1);
        z-index: 0;
    }
    .btn:hover {
        background-position: 0 0;
        color: #000;
    }
</style>