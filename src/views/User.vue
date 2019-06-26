<template id="">
<v-content>
  <v-layout justify-start>
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

}
</script>
