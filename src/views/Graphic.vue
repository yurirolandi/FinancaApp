<template>
  <div class="graphic">
    <NavBar />
    <v-container>
      <v-card elevation="2">
        <v-card-title class="text-h4"> Gráficos </v-card-title>
      </v-card>
      <v-card elevation="2" class="mt-5">
        <div class="small">
          <Graphics
            class="teste"
            v-if="hasData"
            :data="loadChartData"
            :options="chartOptions"
          />
        </div>
      </v-card>
    </v-container>
    <BottomNavigation />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Graphics from "../plugins/PieChart";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
export default {
  components: {
    Graphics,
    BottomNavigation,
    NavBar,
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
  methods: {
    ...mapActions(["getAno"]),
  },
  mounted() {
    this.getAno(1);
  },
};
</script>

<style lang="scss" scoped>
.graphic {
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  .small {
    max-width: 1100px;
  }
}
</style>
