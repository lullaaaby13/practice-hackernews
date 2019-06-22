<template lang="html">
  <v-toolbar
  app
  color="success"
  dark>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{ name: 'news' }">News</v-btn>
      <v-btn flat :to="{ name: 'news' }">Newest</v-btn>
      <v-btn flat :to="{ name: 'news' }">Ask</v-btn>
      <v-btn flat :to="{ name: 'news' }">Show</v-btn>
      <v-btn flat :to="{ name: 'news' }">Jobs</v-btn>
    </v-toolbar-items>


  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
