<template>
  <nav :class="{ nav: true, active: isActive }">
    <ul>
      <a href="/">
        <li class="list-item">Technology</li>
      </a>
      <a href="/">
        <li class="list-item">Business</li>
      </a>
      <a href="/">
        <li class="list-item">Health</li>
      </a>
      <a href="/">
        <li class="list-item">Sports</li>
      </a>
      <a href="/">
        <li class="list-item">General</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["isActive"],
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
}
.active {
  display: inline-block;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: var(--nav-bgc);
}
ul {
  padding: 0;
  margin: 0;
}
nav ul a {
  text-decoration: none;
  color: var(--white);
}
nav ul a:hover {
  color: #e6e6e6;
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
  background-color: #50c550;
}
</style>