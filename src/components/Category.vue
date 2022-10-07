<template>
  <div class="category">
    <h3 class="category-heading">{{ category }}</h3>
    <div class="articles">
      <div
        class="article-wrapper"
        v-for="article in articleData"
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
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";
import { excerptGenerator } from "../composables/excerptGenerator";
import noImg from "../assets/img/noImg.svg";

export default {
  props: ["articleData", "category"],
  setup() {
    return { placeholder, excerptGenerator, noImg };
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
  .category {
    margin: 9rem 0 3rem 0;
  }
  .category-heading {
    margin: 1rem;
  }
  .article-wrapper {
    width: 33%;
    height: 370px;
    position: relative;
  }
  .articles {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 1rem;
    margin: 1rem 0.5rem 3rem 0.5rem;
  }
  .article {
    width: 90%;
  }
  .article img {
    display: inline-block;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 130px;
  }
  .article .noImg {
    object-fit: unset;
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
  .article-attribution-container {
    position: absolute;
    bottom: -7rem;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }
  .article-source {
    margin: 0;
  }
  .article-published {
    margin-top: 0.5rem;
  }
}
@media (min-width: 50em) {
  .article-wrapper {
    height: 300px;
  }
  .article img {
    height: 150px;
  }
}
@media (min-width: 62.5em) {
  .category {
    width: 100%;
    padding: 0;
  }
  .articles {
    width: 95%;
    margin: 2rem auto 3rem auto;
  }
  .article-wrapper {
    height: 330px;
  }
  .article img {
    height: 200px;
  }
  .article-published::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 14px;
    margin-right: 0.3rem;
    background-color: var(--primary);
  }
}
</style>