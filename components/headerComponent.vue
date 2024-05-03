<template>
    <div class="section__container header__container">
        <div class="image-container">
            <slot name="image">
                <nuxt-img class="img" :src="image" alt="cover" />
            </slot>
            <div class="header__content">
                <h1 class="fup">{{ title }}</h1>
                <h2 class="fup">{{ subtitle }}</h2>
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
      },
      image: {
        type: String,
        default: '/public/images/cover.webp'
      }
    }
  }
</script>

<style scoped>
.section__container {
  max-width: 85vw;
  margin: auto;
  padding: 5rem 1rem;
  height: 100%;
  min-height: 100vh;
}

.header__container {
  padding: 1rem 1rem 5rem 1rem;
  animation: scaleIn cubic-bezier(1,-0.01,0,1.01) 2s forwards;

}

.image-container {
  position: relative;
  top: 20vh;
  min-height: 500px;
  background: linear-gradient(
      to right,
      rgba(44, 56, 85, 0.9),
      rgba(100, 125, 187, 0.1)
    ),
    /* url("/public/images/cover.webp"); */;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  border-radius: 2rem;
}
.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right,
    rgba(44, 56, 85, 0.9),
    rgba(100, 125, 187, 0.1)
  );
  border-radius: 2rem;

}
.img {
  display: block;
  position: absolute;
  width: 100%;
  min-height: 500px;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
  z-index: -1;
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
  color:white;
}

.header__content h2 {
  color: whitesmoke;
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
  color: black;
  font-size: 1.2rem;
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .image-container  {
    top: 15vh;
  }
  .header__content h1 {
    font-size: 1.5rem;
    line-height: 1;
  }
  .header__content h2 {
    font-size: 1.2rem;
    line-height: 1;
  }
  .paragraph_container {
    bottom: -2rem;
    width: calc(100% - 3rem);
    padding: 1.5rem 2rem;
  }
  .paragraph_container p {
    font-size: .8rem;
  }
}
</style>