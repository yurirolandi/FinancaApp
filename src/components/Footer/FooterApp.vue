<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card flat tile width="100%" class="primary lighten-1 text-center">
      <!-- <v-card-text>
        <Slide />
      </v-card-text>

      <v-divider></v-divider> -->

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Finança App</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
// import Slide from "../Slide/Slide";
export default {
  components: {
    // Slide,
  },
  data: () => ({
    padless: false,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = true;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  padding: 0;
}
.theme--light.v-sheet {
  background-color: transparent;
}
</style>
