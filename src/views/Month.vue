<template>
  <div class="month">
    <NavBar />
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
                  <v-icon color="orange darken-4" right> $openWindow </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-card>
    </v-container>
    <BottomNavigation />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { MesesService } from "@/services/Month";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";

export default {
  components: {
    BottomNavigation,
    NavBar,
  },
  data: () => ({
    meses: [
      { mes: "JANEIRO", value: 1 },
      { mes: "FEVEREIRO", value: 2 },
      { mes: "MARÇO", value: 3 },
      { mes: "ABRIL", value: 4 },
      { mes: "MAIO", value: 5 },
      { mes: "JUNHO", value: 6 },
      { mes: "JULHO", value: 7 },
      { mes: "AGOSTO", value: 8 },
      { mes: "SETEMBRO", value: 9 },
      { mes: "OUTUBRO", value: 10 },
      { mes: "NOVEMBRO", value: 11 },
      { mes: "DEZEMBRO", value: 12 },
    ],
  }),
  methods: {
    ...mapActions(["showSnackBar"]),
    ...mapMutations(["setCurrentMonth", "setLoadingFullScreen"]),
    async viewMonth(month) {
      this.setLoadingFullScreen(true);
      let date = new Date();
      let newValue = `${month.value}${date.getFullYear()}`;
      const data = await MesesService.get(newValue);
      if (data) {
        this.setCurrentMonth(data);
        this.$router.push({ path: "month/" + month.nome });
        this.setLoadingFullScreen(false);
      } else {
        this.setLoadingFullScreen(false);
        this.showSnackBar(["Ocorreu um erro ao buscar contas.", "error"]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.month {
  width: 100%;
}
.v-list-item.v-list-item--link.theme--light {
  border-bottom: 1px solid #e0e0e0;
}
</style>
