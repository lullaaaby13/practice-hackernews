<template id="">
<v-content>
  <!-- 로딩중 -->
  <template v-if="isNowLoading">
    <v-layout justify-center>
      <v-progress-circular
      :size="100"
      :width="7"
      color="success"
      indeterminate
      ></v-progress-circular>
    </v-layout>
  </template>

  <v-layout v-else justify-start>
    <v-flex md3>
      <v-card class="pa-3">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $store.state.user.id }}</h3>
          </div>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <h4>CREATED AT : {{ $store.state.user.created }}</h4>
          <h4>KARMA : {{ $store.state.user.karma }}</h4>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>

</v-content>
</template>
<script>
export default {
  computed: {
    isNowLoading () {
      const { user } = this.$store.state
      return Object.entries(user).length === 0 && user.constructor === Object
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('setUser', {})
    next()
  }
}
</script>
