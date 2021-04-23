<template>
  <div class="detalhes-header">
    <v-app-bar app color="white" elevate-on-scroll>
      <v-btn depressed color="white" class="pa-0" @click="homePage"
        ><v-icon color="#6e6e6e" class="mr-1">mdi-arrow-left</v-icon>
        <v-icon color="#6e6e6e"> mdi-credit-card-outline</v-icon></v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DetalhesHeader",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["ActionHeaderFooter"]),
    homePage() {
      this.ActionHeaderFooter(true);
      this.$router.push({ path: "/" });
    },
  },
};
</script>
