<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="text-h4"> Meses </v-card-title>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(mes, i) in meses" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="mes.nome"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn depressed small @click.stop="viewMonth(mes.nome)">
                VER MÊS
                <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    meses: [
      { nome: "JANEIRO", value: 1 },
      { nome: "FEVEREIRO", value: 2 },
      { nome: "MARÇO", value: 3 },
      { nome: "ABRIL", value: 4 },
      { nome: "MAIO", value: 5 },
      { nome: "JUNHO", value: 6 },
      { nome: "JULHO", value: 7 },
      { nome: "AGOSTO", value: 8 },
      { nome: "SETEMBRO", value: 9 },
      { nome: "OUTUBRO", value: 10 },
      { nome: "NOVEMBRO", value: 11 },
      { nome: "DEZEMBRO", value: 12 },
    ],
  }),
  methods: {
    ...mapMutations(["setCurrentMonth"]),
    viewMonth(month) {
      this.setCurrentMonth(month);
      this.$router.push({ path: "month/" + month });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item.v-list-item--link.theme--light {
  border-bottom: 1px solid #e0e0e0;
}
</style>
