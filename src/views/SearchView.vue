<template>
  <div class="search-page">
    <div class="search-input">
      <input class="input" type="text" placeholder="Search..." />
      <span class="search-icon"><BIconSearch /></span>
    </div>
  </div>
</template>

<script>
import { BIconSearch } from "bootstrap-icons-vue";

export default {
  components: { BIconSearch },
  setup() {
    return {};
  },
};
</script>

<style>
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
  .search-input {
    margin: 5rem 0.5rem 2rem 0.5rem;
  }
}
@media (min-width: 50em) {
  .search-input {
    margin: 3rem auto 2rem auto;
    max-width: 1000px;
  }
}
@media (min-width: 62.5em) {
  .search-icon {
    padding: 1.075rem 1rem;
  }
}
</style>