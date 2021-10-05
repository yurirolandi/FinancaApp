<template>
  <v-app>
    <NavBar v-if="!login" />
    <Loading v-if="loading" />
    <Snackbar />
    <v-main>
      <router-view />
    </v-main>
    <BottomNavigation v-if="!login" />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/common/Loading.vue";
import Snackbar from "@/components/common/Snackbars.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
export default {
  name: "App",
  components: {
    BottomNavigation,
    NavBar,
    Loading,
    Snackbar,
  },
  computed: {
    ...mapGetters({
      login: "getToken",
      loading: "getLoadingFullScreen",
    }),
  },
};
</script>

<style scoped>
main.v-main {
  padding-top: 48px !important;
}
</style>
