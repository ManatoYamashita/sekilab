<template>
    <div id="main">
        <header-component v-for="item in items" :key="item.title" :title="item.title" :subtitle="item.subtitle" :paragraph="item.paragraph" :image="item.image" />

        <div class="professor">
            <div class="prof-1">
                <h2 id="name"><strong>関良明</strong>&nbsp;Yoshiaki Seki</h2>
                <p class="roll"><small>東京都市大学<br>
                    メディア情報学部 情報システム学科,
                    大学院環境情報学研究科 環境情報学専攻 教授<br>
                    デザイン・データ科学部 学部長</small>
                </p>
                <professorHeadComponent />
            </div>
            <div id="history">
                <professorHistoryComponent />
            </div>
            <div id="research">
                <professorResearch />
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              items: [
                  {
                      title: '教授紹介',
                      subtitle: 'Professor page',
                      paragraph: '研究室の指導教員である関先生についての紹介です。',
                      image: '/images/tcu_yc.webp'
                  }
              ]
          };
      }
  }
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "関良明",
        "affiliation": {
            "@type": "Organization",
            "name": "東京都市大学",
            "department": "メディア情報学部 情報システム学科, 大学院環境情報学研究科 環境情報学専攻, デザインデータ科学部 学部長",
            "role": "教授"
        },
        "jobTitle": "教授, 副学長, 学部長",
        "url": "https://comm.tcu.ac.jp/seki_lab/",
        "image": "/images/seki.webp",
        "sameAs": [
            "https://www.researchgate.net/profile/Yoshiaki-Seki",
            "https://scholar.google.co.jp/citations?user=exampleUser"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "関良明 教授"
        }
    };
    useHead({
        script: [
            {
            type: 'application/ld+json',
            children: JSON.stringify(schema)
            }
        ]
    });
</script>

<style lang="css" scoped>
    .professor {
        width: 100%;
    }
    .prof-1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: whitesmoke;
        color: black;
        padding: 3rem;
    }
    .roll {
        line-height: 1.3;
        text-align: center;
        padding-bottom: 4rem;
        color: #000;
    }
    .prof-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .prof-flex-content {
        width: 50%;
    }
    .message {
        padding-left: 3rem;
    }
    h2 {
        font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
        font-weight: bold;
        font-size: 2.5rem;
        padding-top: 5rem;
        padding-bottom: 2rem;
        text-align: center;
    }
    h3 {
        font-size: larger;
        padding: 1rem;
    }
    strong {
        color: var(--seki-main-color);
        font-size: 120%;
    }
    p {
        padding: 1rem;
        font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
        color: rgb(214, 214, 214);
        text-align: justify;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }

    #history {
        width: 100%;
        height: 100vh;
        background-color: var(--seki-main-color);
        color: #fff;
        overflow-x: scroll;
    }
    #research {
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 3rem;
    }

    /* sp表示 */
    @media screen and (max-width: 768px) {
        h2#name {
            font-size: 1.2rem;
            padding: 1rem;
        }
        h2#name strong {
            font-size: 1.5rem;
        }
        prof-1 {
            padding: 1rem;
        }
        .prof-flex {
            flex-direction: column;
        }
        .prof-flex-content {
            width: 100%;
            padding: 1rem;
            text-align: center;
        }
        .message {
            padding-left: 0;
        }
        img {
            object-fit: cover;
            border-radius: 1rem;
        }
        #history {
            height: auto;
        }
        #research {
            padding: 1rem;
        }
    }
</style>