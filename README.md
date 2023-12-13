# SekiLab-2023
<img src="https://github.com/ManatoYamashita/sekilab/assets/95745485/2759cf6f-ffb6-4b9d-a4d0-4bdca7a8b0d7" width="300" />

* [要件定義書(Exel)](https://1drv.ms/x/s!AruScVw9sB9O5D9dQ_PdhAIP56h9?e=VYmnix)
* [画面遷移図(Notion)](https://tcu-yamamana.notion.site/seki-lab-New-website-c2f137c1e5a647aaabeed47c67276792?pvs=4)
* [デザインプロトタイプ(Canva)](https://www.canva.com/design/DAFx-TRbjlg/IDxJPlY5_zL0MiiZagXpEw/view?utm_content=DAFx-TRbjlg&utm_campaign=designshare&utm_medium=link&utm_source=editor)

to learn more.

## About

<img src="https://github.com/ManatoYamashita/sekilab/assets/95745485/860bced5-217e-4830-8d16-6142ca9f9f94" width="200"  />

<img src="https://github.com/ManatoYamashita/sekilab/assets/95745485/31658ae7-8ccc-4173-9ad6-fc04ded04067" width="300" />

**東京都市大学 情報セキュリティ研究室**の新Web siteです。
2023年から情報システム学科からデザインデータ科学科に一転するためこれを機に2014年から使われているwebサイトを一新しました。

### 技術スタック

* [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)（Javascript, Typescript, node.js, Vue.js,）
* [microCMS](https://microcms.io)
* [Google Fonts](https://fonts.google.com)

### 注意

* 開発する際は.envファイルを追加して下さい。
  .envファイルに中身は公開しないでください。microCMSのAPIを叩くときに使います。これが他者にバレると、他者によるコンテンツ(blog)の書き換えが可能になります。
* 著作権には十分注意するようにしてください。使用する画像や動画は、自分で作成したものを使うか、フリーのもの、または規約で許されているもの、AIで生成したものを使用してくさい。
* メンバーの肖像権を守るために使用する場合は必ず許可をとってください。
* 活動報告（blog）機能は、microCMSから投稿したものがこのサイトに表示されます。これによりコンテンツの更新が誰でも簡単にできます。

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

## credit
* 2023/12/12
* 山下マナト(g2172117[at]tcu.ac.jp, info[at]manapuraza.com) 、[at]の部分は@に変えてください。

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
