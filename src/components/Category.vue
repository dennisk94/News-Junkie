<template>
  <div class="category">
    <h3 class="category-heading">Category</h3>
    <div class="articles">
      <a href="/article/123" class="article">
        <img :src="placeholder" alt="title" />
        <h3 class="article-title">
          article title goes here. Thank you very much.
        </h3>
        <p class="article-excerpt">
          Lorem ipsum dolor sit amet conectetur, adipisicing elit. Reiciendis
          dolorem aliquid cum aut exercitationem unde.
        </p>
        <div class="article-attribution-container">
          <p class="article-source">BBC</p>
          <p class="article-published">05/01/2021</p>
        </div>
      </a>
      <a href="/article/123" class="article">
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
      <a href="/article/123" class="article">
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

<style>
.category {
  margin: 2rem 0;
  padding: 0 0.5rem;
}
.article img {
  display: none;
}
.article {
  text-decoration: none;
  color: var(--black);
}
.article::after {
  content: "";
  display: block;
  height: 1px;
  margin: 1rem 0;
  background-color: var(--light-gray);
}
.article-title {
  font-size: 1rem;
}
.article-excerpt {
  display: none;
}
.article-attribution-container {
  display: flex;
  justify-content: space-between;
  color: var(--attribution);
}
.article-source::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 14px;
  margin-right: 0.3rem;
  background-color: var(--primary);
}
@media (min-width: 37.5em) {
  .category-heading {
    margin: 1rem;
  }
  .articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin: 1rem 0.5rem 3rem 0.5rem;
  }
  .article {
    width: 90%;
  }
  .article img {
    display: block;
    width: 100%;
  }
  .article::after {
    display: none;
  }
  .article-excerpt {
    display: block;
    line-height: 1.2rem;
  }
  .article-title,
  .article-source {
    z-index: 5;
    text-transform: uppercase;
  }
}
@media (min-width: 62.5em) {
  .category {
    width: 100%;
    padding: 0;
  }
  .articles {
    width: 100%;
    margin: 0;
  }
}
</style>