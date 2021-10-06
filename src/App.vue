<template>
  <div>
    <v-app id="financa">
      <NavBar v-if="login" />
      <Loading v-if="loading" />
      <Snackbar />
      <div class="financa-container">
        <router-view />
      </div>
      <BottomNavigation v-if="login" />
    </v-app>
  </div>
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

<style lang="scss">
@import "@/styles/Base.scss";
#financa {
  .financa-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    align-items: center;
  }
}
</style>
