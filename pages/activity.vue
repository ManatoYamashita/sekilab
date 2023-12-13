<template>
    <div class="main">
        <header-component :title="data" />
        <div class="detail fup">
            <p>関研究室では様々な活動を行います。その年によって違いますが、一般的な一年のイベントとしては、</p>
            <ul>
                <li>4月: 新３年生配属</li>
                <li>6月: 横浜祭</li>
                <li>7月: オープンキャンパス</li>
                <li>9月: ゼミ合宿</li>
                <li>10月: That's Seminar（研究室紹介）</li>
                <li>11月: 世田谷祭</li>
                <li>2月: 事例研究発表会</li>
                <li>2月: 卒業研究発表会</li>
            </ul>
            <p>などがあります。他にも「他大学との交流会」や、「勉強会」などに参加したりもします。</p>
        </div>
        <div id="blog">
            <blog-component />
        </div>
        <div id="past">
            <h2>過去の活動はこちら</h2>
            <button>
            <a href="#" class="btn2 fup"><span class="spn2">
                <p>旧Webサイト（2014~2022）</p>
            </span></a>
            </button>
        </div>
    </div>
</template>

<script setup>
  const data = '活動内容';
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.detail {
    width: 100%;
    background-color: black;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
p {
    color: white;
    font-size: 1rem;
}
ul {
    color: white;
    font-size: 1rem;
    margin: 1rem;
}
li {
    margin: 0 0 0 1rem;
}
#blog {
    width: 100%;
    height: 100%;
}
#past {
    width: 100%;
    height: 100vh;
    background-color: black;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
h2 {
  font-family: 'Dela Gothic One', 'Noto Sans JP','Helvetica', monospace;
    font-size: 2.5rem;
    padding: 5rem 0;
    color: white;
}
.btn2 {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s;
}

.btn2::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - -2px);
  background-color: black;
  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 50px);
  background-color: black;
  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2:hover::before {
  transform: translateY(-25px);
  height: 0;
}

.btn2:hover::after {
  transform: scaleX(0);
  transition-delay: 0.15s;
}

.btn2:hover {
  border: 2px solid #fefefe;
}

.btn2 span {
  position: relative;
  z-index: 3;
}

button {
  text-decoration: none;
  border: none;
  background-color: transparent;
}
</style>