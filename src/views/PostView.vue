<template id="">
<v-content class="pt-1">

  <v-btn @click="moveBack()">Back</v-btn>

  <h1 class="headline">{{ $store.state.item.title }}</h1>
  <v-subheader>
    by
    <router-link
    class="success--text"
    :to="{ name: 'about' }">
      {{ $store.state.item.user }}
    </router-link>
    has {{ $store.state.item.comments_count }}
    in {{ $store.state.item.time_ago }}
  </v-subheader>

  <v-divider class="my-3"></v-divider>

  <div v-html="$store.state.item.content"></div>
</v-content>
</template>
<script>
export default {
  methods: {
    moveBack () {
      this.$router.go(-1)
    }
  }
}
</script>
