<template>
    <div class="main">
        <header-component :title="data" />
        <div class="prof">
            <professor-component />
        </div>

        <div class="grad stud">
            <small>⚠️2024年現在</small>
            <h2>大学院生</h2>
            <p>環境情報学専攻 1人</p>
            <h3>M2</h3>
                <div class="mems-cards">
                    <div class="mems" v-for="member in membersM2" :key="member.name">
                        <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                    </div>
                </div>
            <h3>M1</h3>
                <div class="mems-cards">
                    <div class="mems" v-for="member in membersM1" :key="member.name">
                        <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                    </div>
                </div>
        </div>
        <div class="under-4 stud">
            <h2>学部4年生</h2>
            <p>メディア情報学部 情報システム学科 13人</p>
            <div class="mems-cards">
                <div class="mems" v-for="member in membersU4" :key="member.name">
                    <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                </div>
            </div>
        </div>
        <div class="under-3 stud">
            <h2>学部3年生</h2>
            <p>メディア情報学部 情報システム学科 10人</p>
            <div class="mems-cards">
                <div class="mems" v-for="member in membersU3" :key="member.name">
                    <member-card-component :name="member.name" :image="member.image" :roll="member.roll" :detail="member.detail" />
                </div>
            </div>
        </div>

        <hr>
        <div class="obog stud">
            <h2>OB&OG</h2>
            <p>90人</p>
            <div class="obogs">
                <div class="obog-card" v-for="member in membersOBOG" :key="member.name">
                    <obog-members-component :name="member.name" :detail="member.detail" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/headerComponent.vue'
import ProfessorComponent from '~/components/professorComponent.vue'
import { reactive } from 'vue'

// 画像ファイルのインポート
import aiyoshizawaImg from '@/assets/mems/pre/aiyoshizawa.jpg'
import kishiImg from '@/assets/mems/2021/kishi.webp'
import yamashitaImg from '@/assets/mems/2021/yamashita.webp'
import konishikawaImg from '@/assets/mems/2021/konishikawa.webp'
import kobayashiShoeiImg from '@/assets/mems/2021/kobayashi-shoei.webp'
import niimiImg from '@/assets/mems/2021/niimi.webp'
import kobayashiShoutaImg from '@/assets/mems/2021/kobayashi-shouta.webp'
import watanabeImg from '@/assets/mems/2021/watanabe.webp'
import akamaImg from '@/assets/mems/2021/akama.webp'
import sukegawaImg from '@/assets/mems/2021/sukegawa.webp'
import wakayamaImg from '@/assets/mems/2021/wakayama.webp'
import igarashiImg from '@/assets/mems/2021/igarashi.webp'
import fukamachiImg from '@/assets/mems/2021/fukamachi.webp'
import yukitomoImg from '@/assets/mems/2021/yukitomo.webp'

const data = 'メンバー紹介'

const membersM2 = reactive([
  {name: "相吉澤 奏", image: aiyoshizawaImg, roll: "環境", detail: "「共分散構造分析の設計手法に関する研究」"},
]);

const membersU4 = reactive([
  {name: "岸 佑奈", image: kishiImg, roll: "ゼミ長", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "山下 真和都", image: yamashitaImg, roll: "広報", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "小西川 龍希", image: konishikawaImg, roll: "イベント", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "小林 祥瑛", image: kobayashiShoeiImg, roll: "イベント", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "新實 一心", image: niimiImg, roll: "イベント", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "小林 将大", image: kobayashiShoutaImg, roll: "環境", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "渡邊 悠人", image: watanabeImg, roll: "環境", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "赤間 弦", image: akamaImg, roll: "広報", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "助川 優香", image: sukegawaImg, roll: "懇親", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "若山 樹", image: wakayamaImg, roll: "懇親", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "五十嵐 星哉", image: igarashiImg, roll: "合宿", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "深町 公貴", image: fukamachiImg, roll: "合宿", detail: "「期間限定販売法における転売防止手法に関する研究」"},
  {name: "行友 裕哉", image: yukitomoImg, roll: "合宿", detail: "「期間限定販売法における転売防止手法に関する研究」"},
]);
const membersU3 = reactive<{name: string, image: string, roll: string, detail: string}[]>([
{name: "not yet assigned", image: "", roll: "", detail: ""},

//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},
//   {name: "岸 祐奈", image: "./assets/mems/m01.webp", roll: "ゼミ長", detail: "「AI生成イラストの判断」"},
//   {name: "山下 真和都", image: "./assets/mems/m01.webp", roll: "広報", detail: "「未定」"},

])
const membersOBOG = reactive<{name: string, detail: string}[]>([
    {name: "篠﨑 玲士", detail: "スマートフォンを用いて物理現象を理解させる3Dアプリケーションに関する研究"},
    {name: "柏倉 愛翔", detail: "行動履歴ベース記憶認証におけるランドマーク画像に関する研究"},
    {name: "小泉 翼", detail: "腕時計型デバイスにおける手数字認識に関する研究"},
    {name: "牧本 浩大", detail: "メールソフトにおけるフィッシング対策ホワイトリストに関する研究"},
    {name: "小泉 鷹矢", detail: "大規模言語モデルを用いた和文のようやく拡張に関する研究"},
    {name: "堀 恭輔", detail: "専門用語を用いた転売ヤーの仕入れ抑止に関する研究"},
    {name: "山内 俊輝", detail: "QRコードの容量拡張と時間制限付与に関する研究"},
    {name: "根本 美歩", detail: "研究室オンライン紹介の運営機能に関する研究"},
    {name: "高山 祐輔", detail: "サッカーにおけるスタッツデータ分析に関する研究"},
    {name: "木村 彩乃", detail: "音声認識における駄洒落の誤認識に関する研究"},

    {name: "相澤 智輝", detail: "SNSにおけるコンテンツ売買のリスクアセスメント"},
    {name: "浅川 智之", detail: "聖地巡礼に着目した地域情報システムに関する研究"},
    {name: "浅葉 清也", detail: "Androidアプリ認可時の注意喚起手法に関する研究"},
    {name: "浅見 拓翔", detail: "スマートフォンカメラにおけるカラーフィルタの色覚補助機能に関する研究"},
    {name: "新井 敬大", detail: "ドライブレコーダ映像の改ざん検出システムに関する研究"},
    {name: "安東 大樹", detail: "スマートフォン搭載カメラのシャッターボタン表示制御に関する研究"},
    {name: "池谷 弘", detail: "PASMO利用データにおける匿名化の重ね合わせに関する研究"},
    {name: "石黒 悠人", detail: "顔認証におけるサーマルカメラの活用に関する研究"},
    {name: "石田 一馬", detail: "非公式クライアントアプリにおけるDDos攻撃化のリスクに関する研究"},
    {name: "泉 玲史", detail: "ランニングアプリにおける自宅の位置情報秘匿に関する研究"},
    {name: "一色 美希", detail: "Android端末におけるOSアップデートに関する研究"},
    {name: "今成 将平", detail: "観光情報のプライバシーに関する研究"},
    {name: "岩瀬 優太", detail: "Bluetooth接続における誤用に関する研究"},
    {name: "氏家 由貴", detail: "不在時の自宅宛て電話着信通知手法に関する研究"},
    {name: "内田 圭輔", detail: "ライダー視点映像から個人特定を防ぐモザイク処理に関する研究"},
    {name: "大谷 海斗", detail: "飲食店におけるテーブル会計システムに関する研究"},
    {name: "大山 駿", detail: "eラーニングへの適用を考慮したゲーム実況の画面構成に関する研究"},
    {name: "小野嶋 優", detail: "スマートフォンで撮影した指紋の識別可能距離に関する研究"},
    {name: "加藤 永士", detail: "感圧センサを用いた着席検知に関する研究"},
    {name: "加藤 慶太郎", detail: "ゼミナール活動における発表資料作成支援システムに関する研究"},
    {name: "加藤 鈴花", detail: "研究室の共有フォルダにおける探索負荷に関する研究"},
    {name: "加島 祥之", detail: "観光におけるモバイル端末貸出サービスのリスクアセスメント"},
    {name: "神谷 亮吾", detail: "活動量計による起床時刻を用いた個人認証に関する研究"},
    {name: "鴨 珠貴", detail: "リレーアタックに対するスマートキーの通信距離に関する研究"},
    {name: "川上 修平", detail: "イラスト制作における色彩感情に基づいた色選択に関する研究"},
    {name: "菊地 拓翔", detail: "オンラインクレジット決済における消費者の購買モデルに関する研究"},
    {name: "岸本 将", detail: "容画像検査装置におけるGrad-Camを用いた検査領域決定に関する研究"},
    {name: "神部 俊太", detail: "ランニングアプリRunkeeperにおける標高データ取得方法に関する研究"},
    {name: "菊地 拓翔", detail: "オンラインクレジット決済における消費者の購買モデルに関する研究"},
    {name: "木村 竜也", detail: "iPhoneを用いた睡眠分析に関する研究"},
    {name: "窪園 聡一郎", detail: "オフライン対応型避難支援システムに関するリスクアセスメント"},
    {name: "熊谷 匠純", detail: "大学生のパスワード共有に関する研究"},
    {name: "クレメニック 亜楠ジョセフ", detail: "Twitterを用いたインターネットサービス障害の検知に関する研究"},
    {name: "小池 英樹", detail: "コミックマーケットを想定した商品情報音声通知システムに関する研究"},
    {name: "小泉 陸人", detail: "Bluetooth通信を用いて匿名性を活かす求人アプリに関する研究"},
    {name: "香坂 卓海", detail: "Twitterを活用した位置情報共有システムに関する研究"},
    {name: "小嶋 海斗", detail: "赤外線センサを利用した品出し確認システムに関する研究"},
    {name: "澤 信吾", detail: "Webテストを用いた情報セキュリティリテラシー測定手法の研究"},
    {name: "鈴木 開斗", detail: "Instagramを活用した情報セキュリティ行動意識向上促す適切な写真選定に関する研究"},
    {name: "鈴木 陽佳", detail: "災害時に自動切り替え可能な帰宅困難者支援システムに関する研究"},
    {name: "関戸 智紀", detail: "Twitterを用いたラーメン店名抽出方法に関する研究"},
    {name: "髙嶋 美紀", detail: "若者のクレジット決済の利用意識に関する研究"},
    {name: "武井 柊唯", detail: "超音波距離センサを用いたレターボックスへの投函物検知手法に関する研究"},
    {name: "田代 鴻一", detail: "防犯カメラの効果的な設置に関する研究"},
    {name: "田中 未来", detail: "研究室ホームページのマイグレーションに関する研究"},
    {name: "谷口 亮太郎", detail: "将棋AIにおける訓練データの影響に関する検証"},
    {name: "田野 遥平", detail: "超音波測距センサを用いた鍵の存在確認手法に関する研究"},
    {name: "千葉 飛虎", detail: "ゼロトラストにおけるWiresharkの限界に関する研究"},
    {name: "茶木 丈司", detail: "バドミントンの競技時間予測式に関する研究"},
    {name: "土本 幸平", detail: "活動量計を用いたライフログ記録と本人意識の差異に関する研究"},
    {name: "土屋 純", detail: "ネットワークログイン用パスワード保管手法に関する研究"},
    {name: "富田 淳也", detail: "リマインダーを活用した研究室の情報共有システムに関する研究"},
    {name: "中嶋 隆", detail: "角速度センサーを用いたゴルフスイング計測方法の研究"},
    {name: "中塚 周平", detail: "スマートディスプレイにおける盗撮リスクに関する研究"},
    {name: "長塚 真輝", detail: "学生間におけるTwitterを活用した安否情報共有システムに関する研究"},
    {name: "永田 航平", detail: "腕時計型デバイスを用いたスマートフォンの盗難防止手法に関する研究"},
    {name: "中野 翔太", detail: "ドライブレコーダのリスクアセスメント"},
    {name: "中谷 彩希", detail: "仮想空間における広告掲示に関する研究"},
    {name: "新田 丈二", detail: "銀行アプリ等ログイン中における端末盗難後の本人認証に関する研究"},
    {name: "新田 康人", detail: "ICタグを装着したペットボトルのリスクアセスメント"},
    {name: "野中 慧大", detail: "野球の素振りを伴う打撃計測方法に関する実験"},
    {name: "信川 健人", detail: "サッカー練習場におけるプライバシー保護システムに関する研究"},
    {name: "朴舘 聖", detail: "WebブラウザのID/パスワード管理に関する研究"},
    {name: "端 鳳俊", detail: "Androidスマートフォンの顔認証制度と距離に関する研究"},
    {name: "檜山 喬子", detail: "e-StatAPI機能におけるR利用時のユーザビリティに関する研究"},
    {name: "平野 舜也", detail: "標的型攻撃メールへの対応力測定手法に関する研究"},
    {name: "福原 秀斗", detail: "フィッシング回避における批判的思考態度と認知的熟慮性に関する研究"},
    {name: "本多 五貴", detail: "自作AIスピーカーの盗聴可能性に関する研究"},
    {name: "増田 凱哉", detail: "生体認証を活用したネットワークサービスのログイン手法に関する研究"},
    {name: "又見 祐一郎", detail: "不審者遭遇時における防犯アプリ利用のリスクアセスメント研究"},
    {name: "松尾 和則", detail: "時刻同期方式のポートノッキングを用いたSSHポート秘匿に関する研究"},
    {name: "松下 海央", detail: "腕時計型デバイスを用いたユーザ認証維持しに関する研究"},
    {name: "水野 優太", detail: "学内におけるZoom爆撃攻撃と対策に関する研究"},
    {name: "宮北 健太", detail: "スマートロックにおける本人識別の認証手法に関する研究"},
    {name: "望月 琉楠", detail: "オンライン授業受講学生に対応する質問紙更改に関する研究"},
    {name: "森川 勝平", detail: "光センサを用いた部屋の明るさの感知に関する研究"},
    {name: "柳瀬 優作", detail: "ウェアラブル端末を活用した起床時刻認証に関する研究"},
    {name: "山﨑 梓", detail: "学内における情報セキュリティポリシー改善に関する研究"},
    {name: "山口 拓人", detail: "ファイルレスマルウェアの特徴を善用した電子投票システムに関する研究"},
    {name: "横井 美紀", detail: "自動車とスマートフォンを接続した際のリスクアセスメント"},
    {name: "吉田 達司", detail: "SNS上で利用されるOAuth認証の認可に関する研究"},
    {name: "米谷 友希", detail: "Wi-Fiのアクセスポイントを利用した位置情報秘匿に関する研究"},
    {name: "米山 裕士", detail: "体成分測定器InBodyによるインピーダンス分析に関する研究"},
    {name: "綿引 侃史", detail: "RBSとMedical SAFERを用いたセキュリティインシデントの分析と分析手法の比較研究"},

])
</script>

<style lang="css" scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: black;
}
.mems-cards {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.mems {
    margin: 1%;
}
.stud {
    background-color: white;
    padding: 2rem 1rem;
    text-align: center;
}
.obog {
    background-color: #f5f5f5;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.obogs {
    box-sizing: content-box;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
h2 {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
}
p {
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-size: 1rem;
    margin-bottom: 1rem;
}
</style>