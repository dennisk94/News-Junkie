<template>
  <div class="headlines">
    <div
      v-for="featured in featuredHeadline"
      :key="featured.title"
      class="featured-wrapper"
    >
      <a class="featured" v-if="featured.urlToImage">
        <img
          :src="featured.urlToImage"
          :alt="featured.title"
          class="featured-img"
        />
        <a class="info" :href="'/article/' + featured.title">
          <h2 class="featured-title">
            {{ excerptGenerator(featured.title) }}
          </h2>
          <p class="attribution">{{ featured.source.name }}</p>
        </a>
      </a>
      <a class="featured" v-else>
        <img :src="noImg" alt="placeholder" class="featured-img" />
        <a class="info" :href="'/article/' + featured.title">
          <h2 class="featured-title">
            {{ excerptGenerator(featured.title) }}
          </h2>
          <p class="attribution">{{ featured.source.name }}</p>
        </a>
      </a>
      <a class="overlay" :href="'/article/' + featured.title"></a>
    </div>
    <div class="featured-articles">
      <div
        v-for="headline in headlines"
        :key="headline.title"
        class="featured-article-wrapper"
      >
        <a class="featured-article">
          <img :src="headline.urlToImage" :alt="headline.title" />
          <a
            :href="'/article/' + headline.title"
            class="featured-article-info-wrapper"
          >
            <h3 class="featured-article-title">
              {{ excerptGenerator(headline.title) }}
            </h3>
            <p class="featured-article-attribution">
              {{ headline.source.name }}
            </p>
          </a>
        </a>
        <a
          :href="'/article/' + headline.title"
          class="top-headline-overlay"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";
import noImg from "../assets/img/noImg.svg";
import { ref } from "vue";
import { excerptGenerator } from "../composables/excerptGenerator";

export default {
  props: ["featuredHeadline", "headlines"],
  components: {},
  setup() {
    const excerpt = ref("");

    return { placeholder, excerptGenerator, excerpt, noImg };
  },
};
</script>

<style>
.featured {
  position: relative;
}
.featured-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
.featured-title {
  position: absolute;
  font-size: 1.2rem;
  top: -7rem;
  right: 0.5rem;
  left: 1rem;
  transform: translateY(-10%);
  color: var(--white);
  text-align: left;
  margin: 0;
  z-index: 12;
}
.attribution {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: var(--featured-attribution);
  text-transform: uppercase;
  z-index: 12;
}
.attribution::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 14px;
  margin-right: 0.3rem;
  background-color: var(--primary);
}
.featured-wrapper {
  position: relative;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--banner-overlay-bgc);
  z-index: 11;
}
.featured-articles {
  margin: 0 0.5rem 3rem 0.5rem;
}
.featured-article {
  text-decoration: none;
  color: var(--black);
}
.featured-article::after {
  content: "";
  display: block;
  height: 1px;
  margin: 1rem 0;
  background-color: var(--light-gray);
}
.featured-article img {
  display: none;
}
.featured-article-title {
  font-size: 1rem;
}
.featured-article-attribution::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 14px;
  margin-right: 0.3rem;
  background-color: var(--primary);
}
.featured-article-info-wrapper {
  text-decoration: none;
  color: var(--black);
}
.featured-article-info-wrapper .featured-article-attribution {
  color: var(--attribution);
}
@media (min-width: 37.5em) {
  .featured-title {
    font-size: 1.5rem;
  }
  .headlines {
    margin-top: 3.4rem;
  }
  .featured-img {
    object-fit: cover;
  }
  .featured-articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1rem;
    width: 85%;
    margin: 1.5rem auto;
  }
  .featured-article {
    position: relative;
    width: 45%;
  }
  .featured-article img {
    display: block;
    width: 100%;
  }
  .featured-article::after {
    display: none;
  }
  .featured-article-title,
  .featured-article-attribution {
    position: absolute;
    margin: 0 0.5rem;
    z-index: 12;
  }
  .featured-article-title {
    bottom: 2rem;
    transform: translateY(-50%);
    color: var(--white);
    font-size: 1.2rem;
  }
  .featured-article-attribution {
    bottom: 0.3rem;
    color: var(--featured-attribution);
    z-index: 12;
  }
  .featured-article-wrapper {
    position: relative;
  }
  .top-headline-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--banner-overlay-bgc);
    z-index: 11;
  }
  .featured-article-info-wrapper .featured-article-attribution {
    color: var(--white);
  }
}
@media (min-width: 50em) {
  .featured-title {
    font-size: 1.5rem;
    top: -6rem;
  }
  .headlines {
    margin-top: 0;
  }
  .featured-articles {
    width: 80%;
  }
  .featured-article-title {
    bottom: 2rem;
  }
}
@media (min-width: 62.5em) {
  .headlines {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 1rem auto;
    max-width: 95%;
    column-gap: 1rem;
  }
  .featured-wrapper {
    width: 50%;
  }
  .featured {
    width: 50%;
  }
  .featured-img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .featured-articles {
    width: 50%;
    margin: 0;
  }
  .featured-article-title {
    bottom: 0;
  }
}
@media (min-width: 75em) {
  .featured-article-title {
    bottom: 1rem;
  }
}
</style>