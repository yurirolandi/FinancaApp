<template>
  <v-app>
    <NavBar v-if="!login" />
    <v-main>
      <router-view />
    </v-main>
    <BottomNavigation v-if="!login" />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar/NavBar.vue";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
export default {
  name: "App",
  components: {
    BottomNavigation,
    NavBar,
  },
  computed: {
    ...mapGetters({
      login: "isLogin",
    }),
  },
};
</script>

<style scoped>
main.v-main {
  padding-top: 48px !important;
}
</style>
