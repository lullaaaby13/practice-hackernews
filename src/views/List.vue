<template lang="html">
  <v-content class="pt-0">
    <v-list two-line>
        <v-subheader>ASK</v-subheader>
          <template v-for="(item, index) in $store.state.list">

            <v-divider></v-divider>

            <!-- type == link -->
            <v-list-tile
            v-if="item.type == 'link'"
            avatar
            @click="gotoURL(item.url)"
            >
            <!-- type == ask -->
            <!-- <v-list-tile
              v-else
              :key="item.title"
              avatar
            > -->
              <v-list-tile-avatar>
                  {{ item.point }}
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          </v-list>
          <v-btn
          block
          color="success"
          @click="fetchMoreData()">More</v-btn>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // this.fetchData()
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    '$route': 'fetchData',
  },
  methods: {
    async fetchData () {
      const { dispatch, state } = this.$store
      const { tab, page } = state
      await dispatch('GET_ITEMS', { type: tab, page })
    },
    gotoURL (url) {
      window.location = url
    },
    fetchMoreData () {
      this.$store.commit('addPage')
      this.fetchData()
    }
  }
}
</script>

<style lang="css" scoped >

</style>
