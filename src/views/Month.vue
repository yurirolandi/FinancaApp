<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="text-h4"> Meses </v-card-title>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <v-virtual-scroll :items="meses" height="450" item-height="64">
        <template v-slot:default="{ item }">
          <v-list-item :key="item.value">
            <v-list-item-content>
              <v-list-item-title v-text="item.mes"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                depressed
                small
                @click.stop="viewMonth({ nome: item.mes, value: item.value })"
              >
                VER MÊS
                <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    meses: [
      { mes: "JANEIRO", value: 5 },
      { mes: "FEVEREIRO", value: 6 },
      { mes: "MARÇO", value: 7 },
      { mes: "ABRIL", value: 8 },
      { mes: "MAIO", value: 9 },
      { mes: "JUNHO", value: 10 },
      { mes: "JULHO", value: 11 },
      { mes: "AGOSTO", value: 12 },
      { mes: "SETEMBRO", value: 13 },
      { mes: "OUTUBRO", value: 14 },
      { mes: "NOVEMBRO", value: 15 },
      { mes: "DEZEMBRO", value: 16 },
    ],
  }),
  methods: {
    ...mapActions(["getMonth"]),
    viewMonth(month) {
      this.getMonth(month.value);
      this.$router.push({ path: "month/" + month.nome });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item.v-list-item--link.theme--light {
  border-bottom: 1px solid #e0e0e0;
}
</style>
