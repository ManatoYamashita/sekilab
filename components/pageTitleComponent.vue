
<template>
    <div class="section__container header__container">
        <div class="header__image__container">
        <div class="header__content">
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </div>
        <div class="paragraph_container">
            <p>{{ paragraph }}</p>
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
      },
      subtitle: {
        type: String,
        default: 'Page Subtitle'
      },
      paragraph: {
        type: String,
        default: 'Page Paragraph'
      }
    }
  }
</script>

<style scoped>
.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
}

.header__container {
  padding: 1rem 1rem 5rem 1rem;
}

.header__image__container {
  position: relative;
  min-height: 500px;
  background-image: linear-gradient(
      to right,
      rgba(44, 56, 85, 0.9),
      rgba(100, 125, 187, 0.1)
    ),
    url("/public/images/cover.webp");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2rem;
}

.header__content {
  max-width: 600px;
  padding: 5rem 2rem;
}

.header__content h1 {
  margin-bottom: 1rem;
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 600;
  color: var(--white);
}

.header__content p {
  color: var(--extra-light);
}

.paragraph_container {
  position: absolute;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 6rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 3rem 2rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.paragraph_container p {
  width: 100%;
  flex: 1;
  color: var(black);
}
</style>