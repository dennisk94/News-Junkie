<template>
  <div class="category">
    <h3 class="category-heading">{{ category }}</h3>
    <div class="articles">
      <div
        class="article-wrapper"
        v-for="article in articleData"
        :key="article.title"
      >
        <a :href="`/article/${article.title}`" class="article">
          <img :src="article.urlToImage" :alt="article.title" />
          <h3 class="article-title">
            {{ article.title }}
          </h3>
          <p class="article-excerpt">
            {{ article.description }}
          </p>
          <div class="article-attribution-container">
            <p class="article-source">{{ article.source.name }}</p>
            <p class="article-published">{{ article.publishedAt }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";

export default {
  props: ["articleData", "category"],
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