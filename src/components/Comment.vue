<template id="">
  <div>
    <v-subheader>
      <router-link
      class="success--text mr-2"
      :to="{ name: 'user', params: { user: comment.user } }">
        {{ comment.user }}
      </router-link>
      {{ comment.time_ago }}
    </v-subheader>

    <span v-if="replyFor != null" class="grey--text">@{{ replyFor }}</span>
    <div v-html="comment.content"></div>

    <div
    v-for="child in comment.comments"
    style="padding-left: 60px;"
    >
      <Comment
      :comment="child"
      :replyFor="comment.user"
      ></Comment>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object,
    replyFor: String,
  },
}
</script>
