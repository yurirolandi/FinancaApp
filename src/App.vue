<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <BottomNavigation />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
export default {
  name: "App",
  components: {
    BottomNavigation,
    NavBar,
  },
};
</script>

<style scoped>
main.v-main {
  padding-top: 48px !important;
}
</style>
