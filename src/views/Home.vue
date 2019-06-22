<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <v-btn color="success">Success</v-btn>
  <v-btn color="error">Error</v-btn>
  <v-btn color="warning">Warning</v-btn>
  <v-btn color="info">Info</v-btn>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
