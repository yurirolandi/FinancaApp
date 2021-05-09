<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="show">
      <div class="header">
        <strong>Olá, Yuri</strong>
        <div class="header__icons">
          <v-icon v-if="showInfo" @click="hidenInfoValue">mdi-eye</v-icon>
          <v-icon v-else @click="hidenInfoValue">mdi-eye-off</v-icon>

          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-cog</v-icon>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Configurações</v-toolbar-title>
              </v-toolbar>
              <div class="container">
                <ul class="container__list" v-for="(item, i) in 1" :key="i">
                  <li class="container__itens">
                    <v-icon>mdi-account</v-icon> Perfil
                  </li>
                </ul>
                <v-btn block color="primary" class="mt-3"> Logout </v-btn>
              </div>
            </v-card>
          </v-dialog>
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
      dialog: false,
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

.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .v-btn--block {
    flex: initial;
  }

  &__list {
    list-style: none;
    padding-left: 0 !important;
  }
  &__itens {
    padding: 1rem;
    border-bottom: 2px solid #f2f2f2;
  }
}
</style>
