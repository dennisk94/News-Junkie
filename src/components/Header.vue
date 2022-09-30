<template>
  <header class="header">
    <div class="logo">
      <h1 class="app-name">News Junkie</h1>
    </div>
    <div v-if="!isActive">
      <BIconList class="hamburger" @click="toggleMenu" />
    </div>
    <div v-if="isActive">
      <BIconFilterRight class="hamburger" @click="toggleMenu" />
    </div>
    <Nav :isActive="isActive" />
  </header>
</template>

<script>
import Nav from "./Nav.vue";
import { BIconList, BIconFilterRight } from "bootstrap-icons-vue";

// Vue imports
import { ref } from "vue";

export default {
  components: {
    Nav,
    BIconList,
    BIconFilterRight,
  },
  setup() {
    const isActive = ref(false);

    const toggleMenu = () => {
      isActive.value = !isActive.value;
      console.log(isActive);
    };
    return { toggleMenu, isActive };
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  background-color: var(--nav-bgc);
  padding: 0 0.5rem;
}
.app-name {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: var(--white);
}
.app-name:hover {
  color: var(--header-hover);
}
.hamburger {
  cursor: pointer;
  font-size: 2rem;
  color: var(--white);
  transition: all 0.2s ease-in-out;
}
.hamburger:hover {
  color: var(--header-hover);
}
</style>