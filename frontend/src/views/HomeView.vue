<template>
  <div class="home">
    <Svgs />
    <div class="selected-svgs-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Svgs from '../components/Svgs.vue';

export default {
  name: 'HomeView',
  components: {
    Svgs,
  },
};
</script>
