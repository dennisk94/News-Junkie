<template>
  <div class="category-page">
    <div class="articles-wrapper">
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";

export default {
  setup() {
    return { placeholder };
  },
};
</script>

<style scoped>
.category-page {
  margin: 0 1rem;
}
.articles-wrapper {
  margin: 0 auto;
}
@media (min-width: 37.5em) {
  .category-page {
    margin: 4rem 1rem 1rem 1rem;
  }
  .articles-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    column-gap: 1rem;
    max-width: 1200px;
    margin: 1rem 0.5rem 3rem 0.5rem;
  }
}
@media (min-width: 62.5em) {
  .articles-wrapper {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }
}
</style>