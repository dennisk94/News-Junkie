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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0.5rem;
}
.input {
  border: none;
  border-radius: 10px;
  width: 70%;
  font-size: 1.3rem;
  padding: 1rem 1rem;
  background-color: var(--input-bgc);
}
.input:focus {
  background-color: var(--input-focus);
}
.search-icon {
  position: absolute;
  right: 0;
  cursor: pointer;
  background-color: green;
  padding: 1rem;
  border: none;
  border-radius: 10px;
}
.search-icon svg {
  color: white;
  font-size: 1.3rem;
}
</style>