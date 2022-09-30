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
</style>