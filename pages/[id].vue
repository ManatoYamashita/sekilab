<!-- 単体記事ページ -->

<template>
  <template v-if="data?.content">
    <main  id="blog-article">
      <h1>
        {{ data.title }}
      </h1>
      <nuxt-img
        id="thumbnail"
        :src="data.thumbnail?.url"
        :width="data.eyecatch?.width"
        :height="data.eyecatch?.height"
        alt="thumbnail"
      />
      <div>
        <!-- <div id="category">
          {{ data.category?.name }}
        </div> -->
        <div id="day">
          {{ data.publishedAt ?? data.createdAt }}
        </div>
      </div>
      <div id="content" v-html="data.content"></div>
      <div class="btn">
        <Button url="/">戻る</Button>
      </div>
      <br>
      </main>
  </template>
  <p v-else>コンテンツの読み込みに失敗しました。再読み込みしてください。（command/control + R）</p>
</template>

<script setup lang="ts">
  import type { Blog } from "~~/types/blog";

  const { params } = useRoute();

  const { data } = await useMicroCMSGetListDetail<Blog>({
    endpoint: "blog",
    contentId: Array.isArray(params.id) ? params.id[0] : params.id,
  });
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: #f3f3f3;
    font-weight: bolder;
  }
  main {
    background-color: black;
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    color: #f3f3f3;
  }
  h1 {
    font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-size: 2rem;
    color: white;
    margin-top: 3rem;
    padding-left: 1rem;
  }
  #thumbnail {
    width: 100%;
    height: auto;
    margin: 1rem 0;
  }
  #day {
    padding: 1rem;
  }
  #content {
    padding: 1rem 1rem 4rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .btn {
    margin: 1rem;
  }
  p {
    padding: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
</style>