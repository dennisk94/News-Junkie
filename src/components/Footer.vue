<template>
  <footer class="footer">
    <div class="categories">
      <div class="category-cell left">
        <a href="/category/technology">Technology</a>
        <a href="/category/business">Business</a>
        <a href="/category/science">Science</a>
      </div>
      <div class="category-cell right">
        <a href="/category/health">Health</a>
        <a href="/category/sports">Sports</a>
        <a href="/category/general">General</a>
      </div>
    </div>
    <p class="copy">&copy; {{ getYear() }} || Dennis Kim</p>
  </footer>
</template>

<script>
import { getYear } from "../utilities/getDates";

export default {
  setup() {
    return { getYear };
  },
};
</script>

<style>
.footer {
  background-color: var(--nav-bgc);
  padding: 1rem 0;
  margin-top: auto;
  text-align: center;
}
.categories {
  display: flex;
  justify-content: space-around;
}
.category-cell a {
  text-decoration: none;
  color: var(--white);
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
.category-cell a:hover {
  text-decoration: underline;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}
.copy {
  margin: 1rem 0 0 0;
  color: white;
}
@media (min-width: 37.5em) {
  .categories {
    justify-content: center;
  }
  .left,
  .right {
    flex-direction: row;
  }
  .left a,
  .right a {
    margin: 0.5rem;
  }
}
@media (min-width: 50em) {
  .left a,
  .right a {
    font-size: 1rem;
  }
}
</style>