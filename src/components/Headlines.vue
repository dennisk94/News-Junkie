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
        <img :src="placeholder" alt="title" />
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <img :src="placeholder" alt="title" />
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <img :src="placeholder" alt="title" />
        <h3 class="featured-article-title">
          Featured article title goes here. Thank you very much.
        </h3>
        <p class="featured-article-attribution">BBC</p>
      </a>
      <a href="/" class="featured-article">
        <img :src="placeholder" alt="title" />
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
    color: var(--white);
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