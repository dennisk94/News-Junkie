<template>
  <div class="search-page">
    <form class="search-input" @submit.prevent="handleInput">
      <input
        class="input"
        type="text"
        placeholder="Search..."
        v-model="input"
      />
      <span class="search-icon" @click="handleInput"><BIconSearch /></span>
    </form>
    <SearchResults :articles="queriedArticles" />
  </div>
</template>

<script>
import SearchResults from "../components/SearchResults.vue";
import { BIconSearch } from "bootstrap-icons-vue";
import { ref } from "vue";
import fetchQueryArticles from "../composables/fetchQueryArticles";

export default {
  components: {
    BIconSearch,
    SearchResults,
  },
  setup() {
    const input = ref("");
    const { queriedArticles, error, fetchQueriedArticles } =
      fetchQueryArticles();
    const handleInput = () => {
      fetchQueriedArticles(input.value);
      input.value = "";
    };
    return { handleInput, input, queriedArticles };
  },
};
</script>

<style>
.search-page {
  min-height: 69.9vh;
}
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.5rem;
}
.input {
  border: none;
  border-radius: 10px 0 0 10px;
  width: 70%;
  font-size: 1.3rem;
  margin: 0;
  padding: 1rem 1rem;
  background-color: var(--input-bgc);
}
.input:focus {
  background-color: var(--input-focus);
}
.search-icon {
  cursor: pointer;
  background-color: var(--primary);
  padding: 1.05rem 1rem;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.2s ease-in-out;
}
.search-icon:hover {
  background-color: var(--secondary);
}
.search-icon svg {
  color: var(--white);
  font-size: 1.1rem;
}
@media (min-width: 37.5em) {
  .search-page {
    min-height: 75vh;
  }
  .search-input {
    margin: 5rem 0.5rem 2rem 0.5rem;
  }
}
@media (min-width: 50em) {
  .search-page {
    min-height: 78.2vh;
  }
  .search-input {
    margin: 3rem auto 2rem auto;
    max-width: 1034px;
  }
}
@media (min-width: 62.5em) {
  .search-page {
    min-height: 76.9vh;
  }
  .search-icon {
    padding: 1.075rem 1rem;
  }
}
</style>