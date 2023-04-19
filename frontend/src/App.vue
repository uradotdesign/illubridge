<template>
  <nav>
    <div class="navigation">
      <div class="nav-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <input type="text" name="Search Icons" id="search-bar" />
    </div>
    <FilterTab />
  </nav>
  <router-view />
</template>

<script>
import FilterTab from './components/FilterTab.vue';

export default {
  components: {
    FilterTab,
  },
};
</script>
