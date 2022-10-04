<template>
  <div class="category-sports-wrapper">
    <img :src="placeholder" alt="title" class="category-sports-img" />
    <div class="category-sports">
      <h3 class="category-heading">Category</h3>
      <div class="articles">
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
  </div>
</template>

<script>
import placeholder from "../assets/img/sports-placeholder.jpg";

export default {
  setup() {
    return { placeholder };
  },
};
</script>

<style scoped>
.category-sports-wrapper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.category-sports-img {
  position: relative;
  width: 100%;
  height: 57vh;
  -o-object-fit: cover;
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
  }
  .articles {
    width: 100%;
    margin: 0;
  }
  .category-sports-img {
    object-fit: cover;
    height: 65vh;
  }
  .category-sports {
    max-width: 1000px;
    margin: 0 auto;
    height: 53vh;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>