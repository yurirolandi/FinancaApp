<template>
  <div class="adicionaContainer">
    <SharedHeader />
    <section>
      <v-card class="card" elevation="2" shaped>
        <div class="container-inputs">
          <Selected :meses="mes" />
          <v-btn color="success" @click="adicionaComponente">Adicionar</v-btn>
        </div>
      </v-card>
    </section>
    <section>
      <AdicionaItens :mesSelecionado="mesSelecionado" />
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
    ...mapActions(["getMesesApi"]),
    adicionaComponente() {
      this.showAdiciona = true;
    },
  },
  created() {
    this.getMesesApi();
  },
};
</script>

<style lang="scss" scoped>
.adicionaContainer {
  .card {
    margin: 1rem;
    .container-inputs {
      padding: 1.2rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
