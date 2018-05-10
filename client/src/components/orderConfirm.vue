<template>
  <div class="page">
      <mallheader></mallheader>  
      <router></router>
      <process></process>
      <foot></foot>
  </div>
</template>

<script type="text/ecmascript-6">
  import MallHeader from "./base_component/mallheader";
  import Router from "./base_component/router";
  import Process from './base_component/process.vue';
  import Foot from "./base_component/footer";
  export default {
    data() {
      return {
      }
    },
    components: {
      MallHeader,
      Router,
      Process,
      Foot
    }
  }
</script>

<style scoped>

</style>
