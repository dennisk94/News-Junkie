<template>
  <div class="headlines">
    <div class="featured">
      <img :src="placeholder" alt="title" class="featured-img" />
      <div class="info">
        <h2 class="featured-title">
          Title of the article goes here. slfksj slkjlf ksjlfkjs dlfjsldfj
        </h2>
        <p class="attribution">BBC</p>
      </div>
    </div>
    <div class="featured-articles">
      <a href="/" class="featured-article">
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
    </div>
  </div>
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";

export default {
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
  bottom: 40%;
  right: 0.5rem;
  left: 0.5rem;
  transform: translateY(-10%);
  color: var(--white);
  text-align: left;
  margin: 0;
}
.attribution {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: var(--white);
}
.attribution::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 14px;
  margin-right: 0.3rem;
  background-color: var(--primary);
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
</style>