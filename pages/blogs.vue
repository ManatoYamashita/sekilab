<!-- ブログページ（もっと見る から） -->

<template>
  <div id="main">
    <header-component :title="title" />
    <article>
      <ul class="blogs fup" v-if="data?.contents">
        <li v-for="blog in data?.contents" :key="blog.id" class="blog-data">
          <NuxtLink :to="`/${blog.id}`" class="blog-card">
            <img :src="blog.thumbnail?.url" :width="100" alt="article-thumbnail" class="thumbnail"/>
            <div class="article">
              <div>
                <h2 class="blog-title">{{ blog.title }}</h2>
              </div>
              <div class="blog-date">{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <p v-else>コンテンツの読み込みに失敗しました。再読み込みしてください。（command/control + R）</p>
    </article>
  </div>
</template>

<script setup lang="ts">
  import type { Blog } from "~/types/blog";
  const title = 'ブログ一覧'
  const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blog",
  });
</script>

<style scoped>
article {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 2rem;
  overflow-y: scroll;
}
  .blogs {
    list-style: none;
    padding: 0;
  }
  .blog-data {
    padding: .5rem;
    background-color: #f0f0f0;
    border-radius: .5rem;
    margin-bottom: .5rem;
  }
  .blog-card {
    gap: .5rem;
    display: flex;
    height: 5rem;
    align-items: center;
  }
  .thumbnail {
    border-radius: 10px;
    width: 8.89rem;
    height: 5rem;
    object-fit: cover;
  }
  .blog-title {
    font-family: 'Helvetica', monospace;
    font-size: 1.2rem;
  }
  .blog-date {
    font-size: 0.8rem;
    color: #666;
  }
  p {
    font-size: 1.2rem;
    padding: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .blog-title {
      font-size: 1rem;
    }
  }
</style>