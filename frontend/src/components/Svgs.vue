<template>
  <div class="container">
    <div class="container illustrations">
      <div
        v-for="svgItem in svgArray"
        class="illustration"
        v-bind:key="svgItem.id"
      >
        <div v-html="svgItem.svg"></div>
      </div>
    </div>
    <div id="picker"></div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  setup() {
    var svgArray = reactive([
      {
        svg: null,
      },
    ]);

    var svgColorTags;

    async function GetAll() {
      const res = await fetch("http://localhost:3000/svgs");
      const data = await res.json();
      svgArray.pop();
      for (const item of data) {
        svgArray.push(item);
      }
    }

    GetAll();

    function getColorTags() {}

    onMounted(() => {

    })

    return { svgArray, GetAll, svgColorTags };
  },
};
</script>
