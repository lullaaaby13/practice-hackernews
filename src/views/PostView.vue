<template id="">
<v-content class="pt-1">

  <v-btn @click="moveBack()">Back</v-btn>

  <h1 class="headline">{{ $store.state.item.title }}</h1>
  <v-subheader>
    by
    <router-link
    class="success--text"
    :to="{ name: 'user', params: { user: $store.state.item.user } }">
      {{ $store.state.item.user }}
    </router-link>
    has {{ $store.state.item.comments_count }}
    in {{ $store.state.item.time_ago }}
  </v-subheader>

  <v-divider class="my-3"></v-divider>

  <div v-html="$store.state.item.content"></div>

  <!-- <div>
    <v-textarea
    box
    label="Comment"
    ></v-textarea>
    <v-btn color="success">ADD COMMENT</v-btn>
  </div> -->

  <v-divider class="my-3"></v-divider>

  <template v-for="comment in $store.state.item.comments">
    <Comment
    :comment="comment"
    ></Comment>
  </template>

</v-content>
</template>
<script>
import Comment from '@/components/Comment.vue'

export default {
  components: {
    Comment
  },
  methods: {
    moveBack () {
      this.$router.go(-1)
    }
  }
}
</script>
