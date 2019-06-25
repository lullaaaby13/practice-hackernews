<template lang="html">
  <v-content class="pt-0">
    <v-list two-line>
        <v-subheader>{{ $store.state.tab.toUpperCase() }}</v-subheader>
          <template v-for="(item, index) in $store.state.list">

            <v-divider></v-divider>

            <!-- type == job -->
            <v-list-tile
            v-if="item.type == 'job'"
            avatar
            >
              <v-list-tile-avatar>
                0
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title
                v-html="item.title"
                class="cursor--pointer"
                @click="gotoURL(item.url)"
                ></v-list-tile-title>
                <v-list-tile-sub-title class="pt-1">
                  {{ item.time_ago }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <!-- type == link -->
            <v-list-tile
            v-else
            avatar
            >
              <v-list-tile-avatar>
                  {{ item.points }}
              </v-list-tile-avatar>

              <v-list-tile-content>
                <template v-if="$store.state.tab == 'ask'">
                  <router-link
                  :to="{ name: 'item', params: { id: item.id } }"
                  class="black--text"
                  style="text-decoration: none;"
                  >
                  {{ item.title }}
                </router-link>
              </template>
                <template v-else>
                  <v-list-tile-title
                  v-html="item.title"
                  class="cursor--pointer"
                  @click="gotoURL(item.url)"
                  ></v-list-tile-title>
                </template>

                <v-list-tile-sub-title class="pt-1">
                  {{ item.points }} points
                  by
                  <router-link
                  class="success--text"
                  :to="{ name: 'about' }">
                    {{ item.user }}
                  </router-link>
                  has {{ item.comments_count }} comments
                  in {{ item.time_ago }}
                </v-list-tile-sub-title>
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
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // this.fetchData()
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    '$route': 'fetchData',
  },
  methods: {
    async fetchData() {
      const { dispatch, state } = this.$store
      const { tab, page } = state
      await dispatch('GET_ITEMS', { type: tab, page })
    },
    gotoURL(url, type) {
      window.location = url
    },
    fetchMoreData() {
      this.$store.commit('addPage')
      this.fetchData()
    }
  }
}
</script>

<style lang="css" scoped >

</style>
