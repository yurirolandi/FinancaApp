<template>
  <div>
    <v-app id="financa">
      <Loading v-if="loading" />
      <Snackbar />
      <div class="financa-container">
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/common/Loading.vue";
import Snackbar from "@/components/common/Snackbars.vue";

export default {
  name: "App",
  components: {
    Loading,
    Snackbar,
  },
  computed: {
    ...mapGetters({
      loading: "getLoadingFullScreen",
      token: "getToken",
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
    background: #eceff1;
  }
}
</style>
