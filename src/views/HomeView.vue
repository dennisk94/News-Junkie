<template>
  <div class="home">
    <div v-if="headlines.length">
      <Headlines :featuredHeadline="featuredHeadline" :headlines="headlines" />
    </div>
    <div v-else>Loading...</div>
    <div v-if="technologyData.length">
      <Category :articleData="technologyData" category="Technology" />
    </div>
    <div v-if="businessData.length">
      <Category :articleData="businessData" category="Business" />
    </div>
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
    const { technologyData, businessData, fetchArticles } =
      fetchCategoryArticles();
    fetchArticles("technology");
    fetchArticles("business");
    console.log(technologyData, businessData);
    return { featuredHeadline, headlines, technologyData, businessData };
  },
};
</script>
<style>
.home {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
