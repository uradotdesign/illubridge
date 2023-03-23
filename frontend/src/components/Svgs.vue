<template>
  <div>
    <div class="illustration-box"></div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  setup() {
    var state = reactive({
      svgs: {},
    });

    function GetAll() {
      fetch('http://localhost:3000/svgs')
        .then((res) => res.json())
        .then((data) => {
          state.svgs = data;
        });
    }

    GetAll();

    console.log(typeof state);
    console.log(state.svgs[0].svg);

    onMounted(() => {
      var illustrationBox = document.querySelector('.illustration-box');
      //   illustrationBox.innerHTML = state.svgs[0].svg;
    });

    return { state, GetAll };
  },
};
</script>
