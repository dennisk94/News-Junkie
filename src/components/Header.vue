<template>
  <header class="header">
    <a href="/" class="logo">
      <h1 class="app-name">News Junkie</h1>
    </a>
    <div v-if="!isActive" class="hamburger-icon">
      <BIconList class="hamburger" @click="toggleMenu" />
    </div>
    <div v-if="isActive" class="hamburger-icon">
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
.logo {
  text-decoration: none;
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
.hamburger-icon {
  display: inline-block;
}
@media (min-width: 37.5em) {
  .header {
    justify-content: center;
  }
  .hamburger-icon {
    display: none;
  }
}
@media (min-width: 50em) {
  .header {
    justify-content: space-between;
  }
}
@media (min-width: 62.5em) {
  .app-name {
    font-size: 1.7rem;
  }
}
</style>