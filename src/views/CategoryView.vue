<template>
  <div class="category-page">
    <div class="articles-wrapper">
      <div
        class="featured-category-wrapper"
        v-for="featuredArticle in featuredcategoryArticle"
        :key="featuredArticle.title"
      >
        <a
          :href="`/article/${featuredArticle.title}`"
          class="featured-category-article"
          v-if="featuredArticle.urlToImage"
        >
          <img
            :src="featuredArticle.urlToImage"
            :alt="featuredArticle.title"
            class="featured-category-img"
          />
          <div class="info">
            <h3 class="featured-title">
              {{ excerptGenerator(featuredArticle.title) }}
            </h3>
            <div class="featured-article-attribution-container">
              <p class="attribution">
                {{ featuredArticle.source.name }}
              </p>
            </div>
          </div>
        </a>
        <a class="overlay" :href="'/article/' + featuredArticle.title"></a>
      </div>
      <div
        class="article-wrapper"
        v-for="article in categoryArticles"
        :key="article.title"
      >
        <a
          :href="`/article/${article.title}`"
          class="article"
          v-if="article.urlToImage"
        >
          <img :src="article.urlToImage" :alt="article.title" />
          <h3 class="article-title">
            {{ excerptGenerator(article.title) }}
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
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";
import { useRouter } from "vue-router";
import fetchCategoryArticles from "../composables/fetchCategoryArticles";
import noImg from "../assets/img/noImg.svg";
import { excerptGenerator } from "../composables/excerptGenerator";

export default {
  setup() {
    // Route instance
    const router = useRouter();
    // The current category the user has clicked on
    const category = router.currentRoute.value.params.slug;
    // The current type the user has clicked on. eg. country or category
    const type = router.currentRoute.value.name.toLowerCase();
    // * Fetch articles
    const { categoryArticles, featuredcategoryArticle, fetchArticles } =
      fetchCategoryArticles();
    // * Fetch all data for single category page
    fetchArticles(category, type, "single");
    return {
      placeholder,
      categoryArticles,
      featuredcategoryArticle,
      noImg,
      excerptGenerator,
    };
  },
};
</script>

<style scoped>
.category-page {
  margin: 0 1rem;
}
.featured-category-wrapper,
.featured-category-article {
  position: relative;
}
.featured-category-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
.articles-wrapper {
  margin: 0 auto;
}
@media (min-width: 37.5em) {
  .category-page {
    margin: 2rem 1rem 1rem 1rem;
  }
  .category-page .articles-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    column-gap: 1rem;
    row-gap: 1rem;
    max-width: 1200px;
    margin: 1rem auto 3rem auto;
  }
  .articles-wrapper .article-wrapper {
    width: 100%;
  }
  .featured-category-wrapper {
    grid-area: 1 / 1 / 2 / 3;
  }
}
@media (min-width: 62.5em) {
  .articles-wrapper {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }
}
</style>