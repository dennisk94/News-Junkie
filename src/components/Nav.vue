<template>
  <nav :class="{ nav: true, active: isActive }">
    <ul>
      <a href="/category/technology">
        <li class="list-item">Technology</li>
      </a>
      <a href="/category/business">
        <li class="list-item">Business</li>
      </a>
      <a href="/category/sports">
        <li class="list-item">Sports</li>
      </a>
      <a href="/country/us">
        <li class="list-item">US</li>
      </a>
      <a href="/category/health">
        <li class="list-item">Health</li>
      </a>
      <a href="/category/general">
        <li class="list-item">General</li>
      </a>
      <a href="/search">
        <li class="list-item search">Search</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["isActive"],
  components: {},
  setup() {
    return {};
  },
};
</script>

<style>
.nav {
  display: none;
  color: var(--white);
  font-size: 1.2rem;
  padding: 1rem;
  z-index: 13;
}
.active {
  display: inline-block;
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  background-color: var(--nav-bgc);
}
ul {
  padding: 0;
  margin: 0;
  text-align: center;
}
nav ul a {
  text-decoration: none;
  color: var(--white);
}
nav ul a:hover {
  color: var(--anchor-item-hover);
}
.list-item {
  list-style: none;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
.list-item:hover {
  background-color: var(--secondary);
}
@media (min-width: 37.5em) {
  .nav {
    display: inline-block;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    background-color: var(--nav-bgc);
    padding: 0;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  .list-item {
    padding: 0.5rem;
  }
  @media (min-width: 50em) {
    .nav {
      top: 0.4rem;
      left: 10rem;
      padding: 0;
    }
    ul {
      align-items: flex-end;
    }
    .list-item {
      font-size: 1rem;
    }
  }
  @media (min-width: 62.5em) {
    .nav {
      top: 0.5rem;
      left: 15rem;
    }
    .list-item {
      font-size: 1.2rem;
    }
  }
}
</style>