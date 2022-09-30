<template>
  <div class="home">
    <Headlines />
  </div>
</template>

<script>
import { fetchTopHeadlines } from "../composables/fetchTopHeadlines";
import Headlines from "@/components/Headlines.vue";

export default {
  components: {
    Headlines,
  },
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
};
</script>
