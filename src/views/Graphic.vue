<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="text-h4"> Gráficos </v-card-title>
    </v-card>
    <Graphics v-if="hasData" :data="loadChartData" :options="chartOptions" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Graphics from "../plugins/PieChart";
export default {
  components: {
    Graphics,
  },
  computed: {
    ...mapGetters({
      ano: "getCurrentAno",
      hasData: "getLoadedData",
    }),
    loadChartData() {
      return this.ano;
    },
  },
  data: () => ({
    chartOptions: {
      hoverBorderWidth: 10,
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
};
</script>

<style lang="scss" scoped></style>
