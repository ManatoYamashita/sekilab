<!-- トップページにあるブログリスト -->

<script setup lang="ts">
    import type { Blog } from "~/types/blog";
    
    const { data } = await useMicroCMSGetList<Blog>({
        endpoint: "blog",
    });
</script>

<template>
    <div class="blog-wrap">
        <div class="blog-left sin">
            <img format="webp" src="/images/tcu_yc.webp" alt="TCU Yokohama Campus" class="fup" />
        </div>
        
        <article class="blog-right">
            <h2 class="fup">最新情報</h2>
            <client-only>
                <ul class="blogs fup" v-if="data?.contents">
                    <li v-for="blog in data?.contents" :key="blog.id" class="blog-data">
                        <NuxtLink :to="`/${blog.id}`" class="blog-card">
                        <div class="article">
                            <div>{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}&nbsp; <strong>{{ blog.title }}</strong></div>
                        </div>
                        </NuxtLink>
                    </li>
                </ul>
                <p v-else>コンテンツの読み込みに失敗しました。再読み込みしてください。（command/control + R）</p>
            </client-only>
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
        background-color: #fff;
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
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        text-decoration: none;
        color: #333;
    }
    h2 {
        font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    ul.blogs {
        list-style: none;
        padding: 0 0 2rem 0;
        margin-bottom: 2rem;
        z-index: 0;
        height: 40vh;
        overflow-y: scroll;
        scrollbar-width: 10px;
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1; 
            }
            ::-webkit-scrollbar-thumb {
                background: #888; 
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #555; 
            }
    }
    li.blog-data {
        font-size: 1rem;
        margin-bottom: .5rem;
    }
    img {
        height: 100%;
        object-fit: cover;
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
        padding: 2rem;
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
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .blog-left {
            height: 40%;
        }
        .blog-right {
            height: 60%;
            padding: 0;
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
            margin-bottom: 2rem;
        }
        ul.blogs {
            height: 25vh;
            padding: 0 0 2rem 0;
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