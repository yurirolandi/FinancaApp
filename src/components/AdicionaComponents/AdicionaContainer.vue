<template>
  <div class="adicionaContainer">
    <SharedHeader />
    <section class="header-fixed">
      <v-card class="card" elevation="2" shaped>
        <div class="container-inputs">
          <Selected :meses="mes" />
          <v-btn color="success" @click="adicionaComponente">Adicionar</v-btn>
        </div>
      </v-card>
    </section>
    <section class="header-adiciona">
      <AdicionaItens :mesSelecionado="mesSelecionado" v-if="showAdiciona" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import SharedHeader from "../Shared/SharedHeader";
import Selected from "./AdicionaSelects";
import AdicionaItens from "./AdicionaItens";
export default {
  name: "AdicionaContainer",
  components: {
    SharedHeader,
    Selected,
    AdicionaItens,
  },
  data() {
    return {
      showAdiciona: false,
    };
  },
  computed: {
    ...mapGetters({
      mes: "getMeses",
      mesSelecionado: "getMesSelecionado",
    }),
  },
  methods: {
    ...mapActions(["getMesesApi", "getParcelasApi", "getComercioApi"]),
    adicionaComponente() {
      this.showAdiciona = true;
    },
  },
  created() {
    this.getMesesApi();
    this.getParcelasApi();
    this.getComercioApi();
  },
};
</script>

<style lang="scss" scoped>
.adicionaContainer {
  .card {
    margin: 1rem;
  }

  .header-fixed {
    position: fixed;
    z-index: 10;
    top: 55px;
    width: 100%;
    background: white;
    .container-inputs {
      padding: 1.2rem;
      display: flex;
      justify-content: space-between;
    }
  }

  .header-adiciona {
    padding-top: 200px;
  }
}
</style>
