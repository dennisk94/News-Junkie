<template>
  <div class="search-results">
    <div
      class="results-wrapper"
      v-for="article in articles"
      :key="article.title"
    >
      <a
        :href="`/article/${article.title}`"
        class="article"
        v-if="article.urlToImage"
      >
        <img
          :src="article.urlToImage"
          :alt="article.title"
          class="article-thumbnail"
        />
        <h3 class="article-title">
          {{ article.title }}
        </h3>
        <div v-if="article.content">
          <p class="article-excerpt">
            {{ excerptGenerator(article.content) }}
          </p>
        </div>
        <div v-else>
          <p class="article-excerpt">Read more...</p>
        </div>
        <div class="article-attribution-container">
          <p class="article-source">{{ article.source.name }}</p>
          <p class="article-published">
            {{ article.publishedAt.substring(0, 10) }}
          </p>
        </div>
      </a>
      <a :href="`/article/${article.title}`" class="article" v-else>
        <img
          :src="noImg"
          alt="placeholder"
          :class="{ 'article-thumbnail': true, noImg: !article.urlToImage }"
        />
        <h3 class="article-title">
          {{ article.title }}
        </h3>
        <div v-if="article.content">
          <p class="article-excerpt">
            {{ excerptGenerator(article.content) }}
          </p>
        </div>
        <div v-else>
          <p class="article-excerpt">Read more...</p>
        </div>
        <div class="article-attribution-container">
          <p class="article-source">{{ article.source.name }}</p>
          <p class="article-published">
            {{ article.publishedAt.substring(0, 10) }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";
import { excerptGenerator } from "../composables/excerptGenerator";
import noImg from "../assets/img/noImg.svg";

export default {
  props: ["articles"],
  setup() {
    return {
      placeholder,
      excerptGenerator,
      noImg,
    };
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