<template>
    <div id="main" class="fup">
        <div class="card">
            <h3>
                {{ name }}
            </h3>
            <hr>
            <p>
                研究内容: 『{{ detail }}』
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        name: string,
        detail: string
    }
    const props = defineProps<Props>()
</script>

<style lang="css" scoped>
.card {
    background-color: #fff;
    box-shadow: 0 0 0px rgba(0, 0, 0, .16);
    color: #212121;
    text-decoration: none;
    margin: 1rem auto;
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,.2);
    padding: 1rem;
    text-align: center;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.card:hover {
    box-shadow: 0 0 0px rgba(0, 0, 0, .16);
}
h3 {
    font-size: 1.2rem;
    font-weight: bold;
}
hr {
    margin: 0.5rem 0;
}
p {
    font-size: 0.8rem;
}
</style>