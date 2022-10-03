<template>
  <div class="search-results">
    <a href="/" class="article">
      <img :src="placeholder" alt="title" />
      <div class="article-info">
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
      </div>
    </a>
    <a href="/" class="article">
      <img :src="placeholder" alt="title" />
      <div class="article-info">
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
      </div>
    </a>
    <a href="/" class="article">
      <img :src="placeholder" alt="title" />
      <div class="article-info">
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
      </div>
    </a>
    <a href="/" class="article">
      <img :src="placeholder" alt="title" />
      <div class="article-info">
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
      </div>
    </a>
    <a href="/" class="article">
      <img :src="placeholder" alt="title" />
      <div class="article-info">
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
      </div>
    </a>
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
.search-results {
  margin: 0 1rem;
}
.article {
  padding: 1rem 0;
}
.article-info {
  margin: 0 0 1rem 0;
}
.article img {
  display: block;
  width: 100%;
}
.article::after {
  content: "";
  height: 0;
  margin: 0;
}
@media (min-width: 37.5em) {
  .article {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .article img {
    width: 50%;
    margin-right: 0.5rem;
  }
  .article-info {
    margin: 0 0 0 0.5rem;
  }
}
@media (min-width: 50em) {
  .search-results {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .article {
    padding: 0;
    margin: 1rem 0;
  }
}
</style>