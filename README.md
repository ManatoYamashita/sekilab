# SekiLab-2023

* [要件定義書(Exel)](https://1drv.ms/x/s!AruScVw9sB9O5D9dQ_PdhAIP56h9?e=VYmnix)
* [画面遷移図(Notion)](https://tcu-yamamana.notion.site/seki-lab-New-website-c2f137c1e5a647aaabeed47c67276792?pvs=4)
* デザイン(Figma)

to learn more.

## About

**東京都市大学 情報セキュリティ研究室**の新Web siteです。
2023年から情報システム学科からデザインデータ科学科に一転するためこれを機に2014年から使われているwebサイトを一新します。

### 技術スタック

* [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)（Javascript, Typescript, node.js, Vue.js,）
* [microCMS](https://microcms.io)
* [Google Fonts](https://fonts.google.com)

### 注意

開発s￥する際は.envファイルを追加して下さい。
.envファイルに中身は公開しないでください。microCMSのAPIを叩くときに使います。これが他者にバレると、他者によるコンテンツの書き換えが可能になります。

## Setup

Set up to install and to depelop（npm）

```bash
# Make sure to install the dependencies
npm install

# Start the development server on `http://localhost:3000`
npm run dev

# Build the application for production
npm run build

# Locally preview production build
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.