<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="text-h4"> Gráficos </v-card-title>
    </v-card>
    <Graphics :data="chartData" :options="chartOptions" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Graphics from "../components/common/PieChart";
export default {
  components: {
    Graphics,
  },
  computed: {
    ...mapGetters({
      ano: "getCurrentAno",
    }),
  },
  mounted() {
    this.chartData.labels = this.ano;
    console.log(this.chartData.labels);
  },
  data: () => ({
    chartOptions: {
      hoverBorderWidth: 10,
      responsive: true,
      maintainAspectRatio: false,
    },
    chartData: {
      labels: [],
      datasets: [
        {
          label: "2021",
          // backgroundColor: ["red", "blue", "green"],
          data: [200, 180, 300, 500, 900, 600, 550, 320, 150, 850, 866, 200],
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped></style>
