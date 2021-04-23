<template>
  <div class="home">
    <section>
      <card
        CardIcon="mdi-bank"
        cardTitle="Adicionar Compras"
        cardSubtitle="Adicione as compras do mês"
        @detalhes="adicionarCompras"
      />
    </section>
    <section>
      <card
        CardIcon="mdi-credit-card-outline"
        cardTitle="Cartão de Crédito"
        cardSubtitle="Fatura Atual"
        CardCash="R$ 451,99"
        @detalhes="openDetalhes"
      />
    </section>
    <section>
      <v-card class="card" elevation="2" shaped>
        <TableMonth />
      </v-card>
    </section>
    <section>
      <v-card class="card" elevation="2" shaped>
        <TableMonth />
      </v-card>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import card from "../components/Card/Card";
import TableMonth from "../components/TableMonth/TableMonth";

export default {
  name: "Home",
  components: { card, TableMonth },
  data: () => ({
    model: null,
  }),
  methods: {
    ...mapActions(["ActionHeaderFooter"]),
    openDetalhes() {
      this.ActionHeaderFooter(false);
      this.$router.push({ path: "/detalhes" });
    },
    adicionarCompras() {
      this.ActionHeaderFooter(false);
      this.$router.push({ path: "/adiciona-compras" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f2f2f2;
  padding-top: 1rem;
  .card {
    margin: 1rem;
  }
  section:last-child {
    padding-bottom: 183px;
  }
}
</style>
