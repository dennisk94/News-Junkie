<template>
  <div class="home">
    <div v-if="headlines.length">
      <Headlines :featuredHeadline="featuredHeadline" :headlines="headlines" />
    </div>
    <div v-else>Loading...</div>
    <Headlines />
    <Category />
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
    const { featuredHeadline, headlines, error, fetchHeadlines } =
      fetchTopHeadlines();
    fetchHeadlines();
    console.log(featuredHeadline, headlines);
    return { featuredHeadline, headlines };
  },
};
</script>
<style>
.home {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
