<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>
import { fetchTopHeadlines } from "../composables/fetchTopHeadlines";

export default {
  setup() {
    // fetchTopHeadlines();
    // getTopHeadlines();
    // const req =
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=91ee0a843cd04e0d84abf0eea02b880e";
    // console.log(req);
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=91ee0a843cd04e0d84abf0eea02b880e"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data.articles[0].content));
  },
  name: "HomeView",
  components: {},
};
</script>
