<template>
  <div class="headlines">
    <div
      v-for="featured in featuredHeadline"
      :key="featured.title"
      class="featured-wrapper"
    >
      <a :href="'/article/' + featured.title" class="featured">
        <img
          :src="featured.urlToImage"
          :alt="featured.title"
          class="featured-img"
        />
        <div class="info">
          <h2 class="featured-title">
            {{ featured.title }}
          </h2>
          <p class="attribution">{{ featured.source.name }}</p>
        </div>
      </a>
      <div class="overlay"></div>
    </div>
    <div class="featured-articles">
      <div v-for="headline in headlines" :key="headline.title">
        <a :href="'/article/' + headline.title" class="featured-article">
          <img :src="headline.urlToImage" :alt="headline.title" />
          <h3 class="featured-article-title">
            {{ headline.title }}
          </h3>
          <p class="featured-article-attribution">{{ headline.source.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";

export default {
  props: ["featuredHeadline", "headlines"],
  components: {},
  setup() {
    return { placeholder };
  },
};
</script>

<style>
.featured {
  position: relative;
}
.featured-img {
  width: 100%;
}
.featured-title {
  position: absolute;
  font-size: 1.2rem;
  top: -9rem;
  right: 0.5rem;
  left: 0.5rem;
  transform: translateY(-10%);
  color: var(--white);
  text-align: left;
  margin: 0;
  z-index: 5;
}
.attribution {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: var(--featured-attribution);
  text-transform: uppercase;
  z-index: 5;
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
@media (min-width: 37.5em) {
  .headlines {
    margin-top: 3.4rem;
  }
  .featured-articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1rem;
    margin: 1rem 0.5rem 3rem 0.5rem;
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
    z-index: 5;
  }
  .featured-article-title {
    bottom: 4rem;
    color: var(--white);
  }
  .featured-article-attribution {
    bottom: 0.3rem;
    color: var(--featured-attribution);
  }
}
@media (min-width: 50em) {
  .featured-title {
    font-size: 1.5rem;
  }
  .headlines {
    margin-top: 0;
  }
}
@media (min-width: 62.5em) {
  .headlines {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    max-width: 95%;
    column-gap: 1rem;
  }
  .featured {
    width: 50%;
  }
  .featured-articles {
    width: 50%;
    margin: 0;
  }
}
</style>