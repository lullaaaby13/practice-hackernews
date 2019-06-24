<template>
<v-app>
  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
  <Toolbar></Toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
    components: {
      Toolbar,
    }
}
</script>

<style>
.cursor--pointer {
  cursor: pointer;
}
</style>
