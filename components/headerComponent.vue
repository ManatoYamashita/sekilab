<template>
    <div class="cover">
        <span id="span"></span>
        <div class="para">
            <div class="para-fillter">
                <h1>{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Page Title'
    }
  }
}
</script>

<style scoped>
.cover {
    width: 100%;
    height: 100%;
    background-color: black;
}
#span {
    display: inline-block;
    width: 100%;
    height: 20vh;
}
.para {
    position: relative;
    top: 0;
    height: 20vh;
    background-image: url(@/assets/tcu_yc.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: white;
}
.para-fillter {
    position: relative;
    top: 0;
    height: 20vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
h1 {        
    font-family: "Noto Sans JP", sans-serif, "Helvetica", monospace;
    font-weight: bold;
    font-size: 2rem;
}
</style>