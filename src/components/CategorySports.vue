<template>
  <div class="category-sports-wrapper">
    <img :src="placeholder" alt="title" class="category-sports-img" />
    <div class="category-sports">
      <h3 class="category-heading">{{ category }}</h3>
      <div class="articles">
        <div
          class="articles-wrapper"
          v-for="article in articleData"
          :key="article.title"
        >
          <a
            :href="`/article/${article.title}`"
            class="article"
            v-if="article.urlToImage"
          >
            <img :src="article.urlToImage" :alt="article.title" />
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
            <div class="article-attribution-container-sports">
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
            <div class="article-attribution-container-sports">
              <p class="article-source">{{ article.source.name }}</p>
              <p class="article-published">
                {{ article.publishedAt.substring(0, 10) }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/sports-placeholder.jpg";
import noImg from "../assets/img/noImg.svg";
import { excerptGenerator } from "../composables/excerptGenerator";

export default {
  props: ["articleData", "category"],
  setup() {
    return { placeholder, noImg, excerptGenerator };
  },
};
</script>

<style scoped>
.category-sports-wrapper {
  position: relative;
  top: 5rem;
  left: 0;
  right: 0;
}
.category-sports-img {
  position: relative;
  width: 100%;
  height: 57vh;
  object-fit: cover;
}
.category-sports {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 2rem 0.5rem;
  color: var(--black);
  background-color: var(--category-sports-bgc);
  border: none;
  border-radius: 10px;
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
  color: var(--black);
}
.article-excerpt {
  display: none;
}
.article-attribution-container {
  display: flex;
  justify-content: space-between;
  color: var(--category-sports-attribution);
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
  .category-sports-img {
    height: 73vh;
  }
  .articles-wrapper {
    height: 462px;
    position: relative;
  }
  .articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin: 1rem 0.5rem;
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
  .article .noImg {
    object-fit: unset;
  }
  .article-excerpt {
    display: block;
    line-height: 1.2rem;
  }
  .article-attribution-container-sports {
    position: absolute;
    bottom: -1rem;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }
  .article-title,
  .article-source {
    z-index: 5;
    text-transform: uppercase;
  }
}
@media (min-width: 50em) {
  .category-sports-img {
    height: 63vh;
  }
  .article-attribution-container-sports {
    bottom: 1rem;
  }
}
@media (min-width: 62.5em) {
  .category {
    width: 100%;
  }
  .articles {
    width: 100%;
    margin: 0;
  }
  .category-sports {
    width: 95%;
  }
  .category-sports-img {
    height: 63vh;
  }
  .category-sports {
    max-width: 1000px;
    margin: 0 auto;
    height: 57vh;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>