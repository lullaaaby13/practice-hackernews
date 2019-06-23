<template lang="html">
  <v-toolbar
  app
  color="success"
  dark>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{ name: 'news',    params: { page: 1 } }">News</v-btn>
      <v-btn flat :to="{ name: 'newest',  params: { page: 1 } }">Newest</v-btn>
      <v-btn flat :to="{ name: 'ask',     params: { page: 1 } }">Ask</v-btn>
      <v-btn flat :to="{ name: 'show',    params: { page: 1 } }">Show</v-btn>
      <v-btn flat :to="{ name: 'jobs',    params: { page: 1 } }">Jobs</v-btn>
    </v-toolbar-items>


  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
