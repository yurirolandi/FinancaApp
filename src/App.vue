<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="show">
      <div class="header">
        <strong>Olá, Yuri</strong>
        <div class="header__icons">
          <v-icon v-if="showInfo" @click="hidenInfoValue">mdi-eye</v-icon>
          <v-icon v-else @click="hidenInfoValue">mdi-eye-off</v-icon>
          <v-icon>mdi-cog</v-icon>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FooterApp v-if="show" />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FooterApp from "./components/Footer/FooterApp";
export default {
  name: "App",
  components: {
    FooterApp,
  },
  data() {
    return {
      dataShowInfo: true,
    };
  },
  methods: {
    ...mapMutations(["setShowInfo"]),
    hidenInfoValue() {
      this.setShowInfo((this.dataShowInfo = !this.dataShowInfo));
    },
  },

  computed: {
    ...mapGetters({
      show: "getHeaderFooter",
      showInfo: "getShowInfo",
    }),
  },
};
</script>

<style lang="scss">
.card {
  margin: 1rem;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icons {
    .v-icon {
      margin-left: 1rem;
      border-radius: 50%;
      background-color: #00000033;
      padding: 0.4rem;
    }
  }
}
</style>
