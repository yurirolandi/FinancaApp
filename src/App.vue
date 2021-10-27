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
@import "@/styles/Responsive.scss";

#financa {
  background-color: #6200ea;

  .financa-container {
    height: 100vh;
    width: 100%;
    padding-top: 60px;
    background: #eceff1;
    margin: 0 auto;
    max-width: 1200px;
    overflow: hidden;
    position: relative;
    transition: margin 0.2s ease-in-out;

    @include breakpoint("lg") {
      border-radius: 24px;
      margin: 32px auto;
    }
  }
}
</style>
