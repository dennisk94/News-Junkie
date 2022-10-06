<template>
  <div class="home">
    <div v-if="headlines.length">
      <Headlines :featuredHeadline="featuredHeadline" :headlines="headlines" />
    </div>
    <div v-else>Loading...</div>
    <div v-if="articleData.length">
      <Category :articleData="articleData" category="Technology" />
    </div>
    <Category />
    <Category />
    <CategorySports />
    <Category />
    <Category />
    <Category />
  </div>
</template>

<script>
import fetchTopHeadlines from "../composables/fetchTopHeadlines";
import fetchCategoryArticles from "../composables/fetchCategoryArticles";
import Headlines from "@/components/Headlines.vue";
import Category from "../components/Category.vue";
import CategorySports from "../components/CategorySports.vue";

export default {
  components: {
    Headlines,
    Category,
    CategorySports,
  },
  setup() {
    // * Fetch featured articles
    const { featuredHeadline, headlines, error, fetchHeadlines } =
      fetchTopHeadlines();
    fetchHeadlines();
    // * Fetch technology articles
    const { articleData, fetchArticles } = fetchCategoryArticles();
    fetchArticles("technology");
    return { featuredHeadline, headlines, articleData };
  },
};
</script>
<style>
.home {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
