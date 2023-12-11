<!-- トップページにあるブログリスト -->

<script setup lang="ts">
    import { Blog } from "~/types/blog";

    const { data } = await useMicroCMSGetList<Blog>({
        endpoint: "blog",
    });
    console.log(data)
</script>

<template>
    <div class="blog-wrap">
        <div class="blog-left">
            <img src="@/assets/tcu_yc.jpg" alt="blog" class="fup">
        </div>

        <article class="blog-right">
            <h2 class="fup">活動報告</h2>
            <ul class="blogs fup">
                <li v-for="blog in data?.contents" :key="blog.id" class="blog-data">
                    <NuxtLink :to="`/${blog.id}`" class="blog-card">
                    <div class="article">
                        <div>{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}&nbsp; <strong>{{ blog.title }}</strong></div>
                    </div>
                    </NuxtLink>
                </li>
            </ul>
            <Button url="/blogs" class="fup">もっと見る</Button>
        </article>
    </div>
</template>

<style scoped>
    .blog-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
    }
    .blog-left, .blog-right {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    article.blog-right {
        margin: 0 auto;
        padding-left: 3rem;
    }
    .blog-card {
        display: block;
        padding: 1rem 0;
        border-bottom: 1px solid #ccc;
        text-decoration: none;
        color: #333;
    }
    h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    ul.blogs {
        list-style: none;
        padding: 0 0 2rem 0;
        z-index: 0;
    }
    li.blog-data {
        font-size: 1rem;
        margin-bottom: .5rem;
    }
    img {
        width: 100%;
        object-fit: cover;
    }

    /* sp表示 */
    @media screen and (max-width: 768px) {
        .blog-wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 100%;
            height: 100vh;
        }
        .blog-left, .blog-right {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        article.blog-right {
            margin: 0 auto;
            padding: 1rem;
        }
        .blog-card {
            display: block;
            padding: 1rem 0;
            border-bottom: 1px solid #ccc;
            text-decoration: none;
            color: #333;
        }
        h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }
        ul.blogs {
            list-style: none;
            padding: 0 0 2rem 0;
            z-index: 0;
        }
        li.blog-data {
            font-size: .7rem;
            padding: 0;
        }
        img {
            width: 100%;
            object-fit: cover;
        }
    }
</style>