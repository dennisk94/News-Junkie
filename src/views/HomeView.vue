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
    <div v-if="sportsData.length">
      <CategorySports :articleData="sportsData" category="Sports" />
    </div>
    <div v-if="countryData.length">
      <Category :articleData="countryData" category="US" />
    </div>
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
    const {
      technologyData,
      businessData,
      sportsData,
      countryData,
      fetchArticles,
    } = fetchCategoryArticles();
    fetchArticles("technology", "category");
    fetchArticles("business", "category");
    fetchArticles("sports", "category");
    fetchArticles("us", "country");
    console.log(technologyData, businessData);
    return {
      featuredHeadline,
      headlines,
      technologyData,
      businessData,
      sportsData,
      countryData,
    };
  },
};
</script>
<style>
.home {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
